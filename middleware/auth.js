// const jwt = require("jsonwebtoken");
// const config = require("config");

// module.exports = function (req, res, next) {
//   //get tokens from header
//   const token = req.header("x-auth-token");

//   //check if no token
//   if (!token) {
//     return res.status(401).json({ msg: "No token , authorisation denied" });
//   }

//   //verify token

//   try {
//     const decoded = jwt.verify(token, config.get("jwtToken"));

//     req.user = decoded.user;
//     next();
//   } catch (err) {
//     return res.status(401).json({ msg: "token is not valid" });
//   }
// };
