const bcrypt = require("bcryptjs");
const mongoose = require("../../database");

const UserSchema = new mongoose.Schema({
  typeUser: {
    type: String,
    required: true,
    lowercase: true
  },

  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },

  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },

  passwordResetToken: {
    type: String,
    select: false,
  },

  passwordResetExpires: {
    type: Date,
    select: false,
  },

  classroom: [{
    type: mongoose.Schema.Types.ObjectId,
  }],

  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
