import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PersonalInfo from "./Registration/PersonalInfo";
import PersonalInfoEdit from "./Registration/EditRegistration/personalinfoedit";
import Welcome from "./Registration/Welcome";

function MainRouter() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/personalinfo" component={PersonalInfo} />
          <Route exact path="/personalinfoedit" component={PersonalInfoEdit} />
          <Route/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default MainRouter;
