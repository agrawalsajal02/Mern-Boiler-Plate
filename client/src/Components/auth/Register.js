// import React, { Fragment, useState } from "react";
// import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";
// import { setAlert } from "../../actions/alert";
// import { register } from "../../actions/auth";
// import PropTypes from "prop-types";
// const Register = ({ setAlert, register, isAuthenticated }) => {
//   const [formData, setformData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     password2: "",
//   });
//   const { name, email, password, password2 } = formData;
//   const onChange = (e) =>
//     setformData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== password2) {
//       //display alert finally
//       setAlert("Password do not Match", "danger", 3000);
//       console.log("password do not match");
//     } else {
//       //   const newuser = {
//       //     name,
//       //     email,
//       //     password,
//       //   };
//       //   try {
//       //     const config = {
//       //       headers: {
//       //         "Content-Type": "application/json",
//       //       },
//       //     };
//       //     console.log(newuser);
//       //     const body = JSON.stringify(newuser);
//       //     console.log(body);
//       //     const res = await axios.post("/api/users", body, config);
//       //     console.log(res.data);
//       //   } catch (err) {
//       //     console.log(err.response.data);
//       //   }
//       register({ name, email, password });
//       //      console.log("sucess");
//     }
//   };

//   if (isAuthenticated) {
//     return <Redirect to="/dashboard" />;
//   }

//   return (
//     <Fragment>
//       <h1 className="large text-primary">Sign Up</h1>
//       <p className="lead">
//         <i className="fas fa-user"></i> Create Your Account
//       </p>
//       <form className="form" onSubmit={(e) => onSubmit(e)}>
//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="Name"
//             name="name"
//             value={name}
//             onChange={(e) => onChange(e)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="email"
//             placeholder="Email Address"
//             required
//             name="email"
//             value={email}
//             onChange={(e) => onChange(e)}
//           />
//           <small className="form-text">
//             This site uses Gravatar so if you want a profile image, use a
//             Gravatar email
//           </small>
//         </div>
//         <div className="form-group">
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={password}
//             onChange={(e) => onChange(e)}
//             required
//             minLength="6"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             name="password2"
//             value={password2}
//             onChange={(e) => onChange(e)}
//             required
//             minLength="6"
//           />
//         </div>
//         <input type="submit" className="btn btn-primary" value="Register" />
//       </form>
//       <p className="my-1">
//         Already have an account? <Link to="/login">Sign In</Link>
//       </p>
//     </Fragment>
//   );
// };

// Register.propTypes = {
//   register: PropTypes.func.isRequired,
//   setAlert: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool,
// };

// const mapstatetorProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(mapstatetorProps, { setAlert, register })(Register);
