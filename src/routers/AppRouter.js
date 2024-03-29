import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import AddExpensePage from "../components/AddExpensePage.js";
import EditExpensePage from "../components/EditExpensePage.js";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage.js";
// import Header from "../components/Header.js";
import NotFoundPage from "../components/NotFoundPage.js";
import LoginPage from "../components/LoginPage.js";
import PrivateRoute from "./PrivateRoute.js";
import PublicRoute from "./PublicRoute.js";
export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      {/* <Header /> */}
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute
          path="/dashboard"
          component={ExpenseDashboardPage}
          exact={true}
        />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute
          path="/edit/:id"
          component={EditExpensePage}
          exact={true}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
