import React, { Component } from "react";
import css from "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Musics/Music";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MyUserContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  // debugger;
  return (
    <Router>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar
        //  state={props.state.sideBar}
        />
        <div className="app_wrapper_content">
          <Switch>
            <Route
              path="/dialogs"
              render={() => (
                <DialogsContainer
                // store={props.store}
                />
              )}
            />
            <Route
              path="/profile/:userId"
              render={() => (
                <ProfileContainer
                // store={props.store}
                />
              )}
            />
            <Route path="/users" render={() => <MyUserContainer />} />
            <Route path="/news" component={() => <News />} />
            <Route path="/music" component={() => <Music />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
