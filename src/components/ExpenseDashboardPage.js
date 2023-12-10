import React from "react";
import ExpenseList from "./ExpenseList.js";
import ExpenseListFilters from "./ExpenseListFilters.js";
import ExpensesSummary from "./ExpenseSummary.js";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
    <ExpensesSummary />
  </div>
);

export default ExpenseDashboardPage;
