import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import getAuthUserData from "./components/redux/authReducer";
import { connect } from "react-redux";
import { compose } from "redux";

class App extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

export default compose(withRouter, connect(null, { getAuthUserData }))(App);
