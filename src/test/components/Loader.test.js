import React from "react";
import { shallow } from "enzyme";
import Loader from "../../components/Loader";

test("should render Loader component", () => {
  const wrapper = shallow(<Loader />);
  expect(wrapper).toMatchSnapshot();
});
