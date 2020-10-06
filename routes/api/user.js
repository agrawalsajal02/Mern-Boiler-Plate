//this is just a example

// const express = require("express");
// const router = express.Router();
// const { body, validationResult } = require("express-validator");
// const gravatar = require("gravatar");
// const normalize = require("normalize-url");
// const bcrypt = require("bcryptjs");
// const config = require("config");
// const jwt = require("jsonwebtoken");

// const User = require("../../models/User");

// // @route post api/user
// // @desc Test route
// // @access Public
// router.post(
//   "/",
//   [
//     body("name", "Name is required").not().isEmpty(),
//     body("password", "please enter minimum of 6 length").isLength({ min: 6 }),
//     body("email", "Please include a valid email").isEmail(),
//   ],
//   async (req, res) => {
//     const err = validationResult(req);
//     if (!err.isEmpty()) {
//       return res.status(400).json({ error: err.array() });
//     }

//     const { name, email, password } = req.body;

//     try {
//       ///see if user exits already

//       //console.log(User);
//       let user = await User.findOne({ email: email });

//       if (user) {
//         return res.status(400).json({ error: [{ msg: "User already exits" }] });
//       }
//       //get user graviator

//       const avatar = normalize(
//         gravatar.url(email, {
//           s: "200",
//           r: "pg",
//           d: "mm",
//         }),
//         { forceHttps: true }
//       );

//       user = new User({
//         name,
//         email,
//         avatar,
//         password,
//       });

//       //enrypt password
//       const salt = await bcrypt.genSalt(10);

//       user.password = await bcrypt.hash(password, salt);

//       await user.save();
//       //return jsonwebtocken

//       const payload = {
//         user: {
//           id: user.id,
//         },
//       };
//       jwt.sign(
//         payload,
//         config.get("jwtToken"),
//         { expiresIn: 360000 },
//         (err, token) => {
//           if (err) {
//             throw err;
//           }
//           return res.json({ token });
//         }
//       );
//     } catch (err) {
//       console.log(err.message);
//       res.status(500).send("Server error");
//     }
//   }
// );

// module.exports = router;
