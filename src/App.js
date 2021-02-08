import React, { Component } from "react";
import css from "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Musics/Music";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";
import MyUserContainer from "./components/Users/UsersContainer";

const App = (props) => {
  // debugger;
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
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
              path="/profile"
              render={() => (
                <Profile
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
