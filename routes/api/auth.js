// this is just a example file

// const express = require("express");
// const router = express.Router();
// const auth = require("../../middleware/auth");
// const User = require("../../models/User");
// const bcrypt = require("bcryptjs");
// const normalize = require("normalize-url");
// const config = require("config");
// const jwt = require("jsonwebtoken");

// const { body, validationResult } = require("express-validator");
// // @route Get api/Auth
// // @desc Test route
// // @access Public
// router.get("/", auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");
//     return res.json(user);
//   } catch (err) {
//     console.log(err.message);
//     return res.status(500).send("Server error");
//   }
// });

// // @route post api/auth
// // @desc Authenticate user and get token
// // @access Public

// router.post(
//   "/",
//   [
//     body("password", "please enter minimum of 6 length").exists(),
//     body("email", "Please include a valid email").isEmail(),
//   ],
//   async (req, res) => {
//     const err = validationResult(req);
//     if (!err.isEmpty()) {
//       return res.status(400).json({ error: err.array() });
//     }

//     const { email, password } = req.body;

//     try {
//       let user = await User.findOne({ email: email });

//       if (!user) {
//         return res.status(400).json({ error: [{ msg: "User not exits" }] });
//       }

//       const match = await bcrypt.compare(password, user.password);

//       if (!match) {
//         //login
//         return res.status(400).json({
//           error: [{ msg: "Invalid credentials .Password not match" }],
//         });
//       }

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
