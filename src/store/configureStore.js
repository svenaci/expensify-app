import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from "../reducers/expenses.js";
import filtersReducer from "../reducers/filters.js";
import thunk from "redux-thunk";

const composedEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    }),
    composedEnhancers(applyMiddleware(thunk))
  );

  return store;
};
