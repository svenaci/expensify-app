//we do have access to es6 and es7 features depending on how we set up babel. They are ran through our babel setup
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database, { firebase } from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = {
      description: description,
      note: note,
      amount: amount,
      createdAt: createdAt,
    };
  });
  database
    .ref("expenses")
    .set(expensesData)
    .then(() => done());
});

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

test("should setup add expense action object with provided value", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

test("should add expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "Rent",
    amount: 1950,
    note: "This is for rent",
    createdAt: 1000,
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
    });
  done();
});

test("should add expense woth defaults to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0,
  };

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
    });
  done();
});

test("should setup set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});
