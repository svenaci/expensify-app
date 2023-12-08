import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, populatedFilters } from "../fixtures/filters";
import moment from "moment";

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with populatedFilters data correctly", () => {
  wrapper.setProps({
    filters: populatedFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "new text";
  wrapper.find("input").simulate("change", {
    target: { value },
  });
  expect(setTextFilter).toHaveBeenCalledWith(value);
});

test("should sort by amount", () => {
  wrapper.find("select").simulate("change", {
    target: { value: "amount" },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should sort by date", () => {
  wrapper.find("select").simulate("change", {
    target: { value: "date" },
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("should handle date change", () => {
  const startDate = moment(0).add(4, "months");
  const endDate = moment(0).add(8, "months");
  wrapper.find("DateRangePicker").prop("onDatesChange")({
    startDate,
    endDate,
  });
  expect(setStartDate).toHaveBeenCalledWith(startDate);
  expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test("should handle date focus changes", () => {
  wrapper.find("DateRangePicker").prop("onFocusChange")("endDate");
  expect(wrapper.state("calendarFocused")).toBe("endDate");
});
