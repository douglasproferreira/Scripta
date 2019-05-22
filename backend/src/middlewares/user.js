const jwt = require("jsonwebtoken");

const userConfig = require("../config/user.json");

module.exports = (req, res, next) => {
  const userHeader = req.headers.authorization;

  if (!userHeader) return res.status(401).send({ error: "No token provided" });

  const parts = userHeader.split(" ");

  if (!parts.length === 2) {
    return res.status(401).send({ error: "Token error" });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: "Token malformatted" });

  jwt.verify(token, userConfig.secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: "Token invalid" });

    req.userId = decoded.id;
    return next();
  });
};
