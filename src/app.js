import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter.js";
import configureStore from "./store/configureStore.js";
import { addExpense } from "./actions/expenses.js";
import { setTextFilter } from "./actions/filters.js";
import getVisibleExpenses from "./selectors/expenses.js";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(addExpense({ description: "Gas bill" }));
store.dispatch(setTextFilter("water"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
