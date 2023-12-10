import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <NavLink className="header__title" to="/" exact={true}>
          <h1>Expense App</h1>
        </NavLink>
        <NavLink to="/create" activeClassName="is-active">
          Create Expense
        </NavLink>
        <NavLink to="/help" activeClassName="is-active">
          Help
        </NavLink>
        <button>Logout</button>
      </div>
    </div>
  </header>
);

export default Header;
