import App from "./App";
import { shallow } from "enzyme";
import React from "react";
import Calculator from "./Calculator";

describe('<App/>', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('it should render a <div/>', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render calculator comp', () => {
        expect(wrapper.containsMatchingElement(<Calculator/>)).toEqual(true);
    });
});