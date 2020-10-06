import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Landing from "./components/Landing";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import Dashboard from "./components/dashboard/Dashboard";
// import "./App.css";

//Redux
import { Provider } from "react-redux";
import store from "./store";

// import { loaduser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
// if (localStorage.token) {
//   console.log("here");
//   setAuthToken(localStorage.token);
// }

const App = () => {
  // useEffect(() => {
  //   store.dispatch(loaduser());
  // }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <h1>New App</h1>
          {/* <Navbar /> */}
          {/* <Route exact path="/" component={Landing} /> */}

          {/* <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />

              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/createprofile"
                component={ProfileForm}
              />
              <PrivateRoute exact path="/editProfile" component={EditProfile} />
              <PrivateRoute
                exact
                path="/addExperience"
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path="/addEducation"
                component={AddEducation}
              />
              <PrivateRoute exact path="/posts" component={Posts} />
              <PrivateRoute exact path="/posts/:id" component={Post} />
            </Switch>
          </section> */}
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
