const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require('crypto');


const User = mongoose.model('User');
const authConfig = require("../../config/user");
const mailer = require("../../modules/mailer");

const generateToken = (params = {}) => {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
};

const register = async (req, res) => {
    const { email } = req.body;
    const { username } = req.body;

    try {
        if (await User.findOne({ username }))
            return res.status(400).send({ error: "Username already exists" });

        if (await User.findOne({ email }))
            return res.status(400).send({ error: "User already exists" });

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({
            user,
            token: generateToken({ id: user.id })
        });
    } catch (err) {
        return res.status(400).send({ error: "Registration failed" });
    }
};

const authenticate = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) return res.status(400).send({ error: "User not found" });

    if (!(await bcrypt.compare(password, user.password)))
        return res.status(400).send({ error: "Invalid password" });

    user.password = undefined;

    res.send({
        user,
        token: generateToken({ id: user.id })
    });
};

const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user)
            return res.status(400).send({ error: "User not found" });

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate({ _id: user._id }, {
            '$set': {
                passordResetToken: token,
                passordResetExpires: now
            }
        })

        mailer.sendMail({
            to: email,
            from: 'douglas.ferreira@novaandradina.org',
            template: 'auth/forgot_password',
            context: { token },
        }, (err) => {
            if (err)
                console.log(err)
            return res.status(400).send({ error: "Cannot send forgot password email" });

            return res.send();
        })

    } catch (err) {
        console.log(err)
        res.status(400).send({ error: 'Error on forgot password - try again' });
    }
}

const resetPassword = async (req, res) => {
    const { email, token, password } = req.body;

    try {
        const user = await User.findOne({ email })
            .select('+passwordResetToken passwordResetExpires');

        if (!user)
            return res.status(400).send({ error: 'User not found' });

        if (token !== user.passwordResetToken)
            return res.status(400).send({ error: 'Token invalid' });

        const now = new Date();
        if (now > user.passwordResetExpires)
            return res.status(400).send({ error: 'Token expired, generate a new one' });

        user.password = password;

        await user.save();

        res.send();

    } catch (err) {
        return res.status(400).send({ error: 'Cannot reset, try again' });
    }
}


module.exports = {
    register,
    authenticate,
    forgotPassword,
    resetPassword
};
