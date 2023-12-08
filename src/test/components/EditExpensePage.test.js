import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let wrapper, historySpy, editExpenseSpy, removeExpenseSpy;

beforeEach(() => {
  editExpenseSpy = jest.fn();
  removeExpenseSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      editExpense={editExpenseSpy}
      removeExpense={removeExpenseSpy}
      history={historySpy}
    />
  );
});

test("should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle edit expense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
  expect(historySpy.push).toHaveBeenCalledWith("/");
  expect(editExpenseSpy).toHaveBeenCalledWith(expenses[0].id, expenses[0]);
  expect(wrapper).toMatchSnapshot();
});

test("should handle remove expense", () => {
  const id = expenses[0].id;
  wrapper.find("button").simulate("click");
  expect(historySpy.push).toHaveBeenCalledWith("/");
  expect(removeExpenseSpy).toHaveBeenCalledWith({ id: expenses[2].id });
});
