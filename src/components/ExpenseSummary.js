import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import numeral from "numeral";
import getExpensesTotal from "../selectors/expensesTotal";
import getVisibleExpenses from "../selectors/expenses";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");

  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} to {formattedExpensesTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
