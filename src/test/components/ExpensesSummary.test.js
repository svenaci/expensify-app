import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpenseSummary";

test("should render ExpensesSummary correctly", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesSummary correctly", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={2} expensesTotal={2350} />
  );
  expect(wrapper).toMatchSnapshot();
});
