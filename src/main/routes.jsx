import React from "react";
import { Switch, Route, Redirect } from "react-router";

import AuthOrApp from "./authOrApp";
import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

export default (props) => (
  <div className="content-wrapper">
    <Switch>
         <Route path="/" component={AuthOrAppcd}>
         <Route path="billingCycles" component={BillingCycle} /> </Route>
         <Redirect from="*" to="/" />
    </Switch>
  </div>
);