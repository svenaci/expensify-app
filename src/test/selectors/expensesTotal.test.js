import moment from "moment";
import getExpensesTotal from "../../selectors/expensesTotal.js";
import expenses from "../fixtures/expenses.js";

test("should return 0 if no expenses", () => {
  const expenses = [];
  const totalAmount = getExpensesTotal(expenses);
  expect(totalAmount).toBe(0);
});

test("should correctly add up a single expense", () => {
  const totalAmount = getExpensesTotal([expenses[0]]);
  expect(totalAmount).toBe(195);
});

test("should correctly add up multiple expense", () => {
  const totalAmount = getExpensesTotal(expenses);
  expect(totalAmount).toBe(114195);
});
