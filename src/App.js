import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import {
  Home, Login, LotteryVn, LotteryLa, Register, User, MainScreen, LoadingScreen,
  HistoryScreen, WebMain, DisplayLottvn
} from "./screens";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { withTranslation } from "react-i18next";
const url = "http://localhost:3000/";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainScreen />
          </Route>
          {/* <Route path="/register"> */}
          <Route path={`${url}/register`}>
            <Register />
          </Route>
          <Route path={`${url}/home`}>
            <Home />
          </Route>
          {/* <Route path="/lottery_Vn"> */}
          <Route path={`${url}/lottery_Vn`}>
            <LotteryVn />
          </Route>
          {/* <Route path="/lottery_La"> */}
          <Route path={`${url}/lottery_La`}>
            <LotteryLa />
          </Route>
          <Route path={`${url}/User`}>
          {/* <Route path="/User"> */}
            <User />
          </Route>
          
          <Route path={`${url}/Login`}>
            <Login />
          </Route>
          {/* <Route path="/LoadingScreen"> */}
          <Route path={`${url}/LoadingScreen`}>
            <LoadingScreen />
          </Route>
          {/* <Route path="/History"> */}
          <Route path={`${url}/History`}>
            <HistoryScreen />
          </Route>
          <Route path="/WebMain">
            <WebMain />
          </Route>
          <Route path="/detail">
            <DisplayLottvn />
          </Route>
          

        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    actionType: state.loginReduce.actionType,
    success: state.loginReduce.success,
    userInfo: state.loginReduce.userInfo,
  };
};

export default connect(mapStateToProps, null)(withTranslation()(index));
