import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage.js";
import EditExpensePage from "../components/EditExpensePage.js";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage.js";
import Header from "../components/Header.js";
import HelpPage from "../components/HelpPage.js";
import NotFoundPage from "../components/NotFoundPage.js";
import LoginPage from "../components/LoginPage.js";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} />
        <Route
          path="/dashboard"
          component={ExpenseDashboardPage}
          exact={true}
        />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} exact={true} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
