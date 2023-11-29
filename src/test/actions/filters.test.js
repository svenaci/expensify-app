//we do have access to es6 and es7 features depending on how we set up babel. They are ran through our babel setup

import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense actino object", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123",
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123", {
    description: "random text",
    amount: 170,
  });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: {
      description: "random text",
      amount: 170,
    },
  });
});

test("should setup add expense action object with default value", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});

test("should setup add expense action object with provided value", () => {
  const expenseData = {
    description: "Rent",
    amount: 1950,
    createdAt: 1000,
    note: "This is for my rent",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});
