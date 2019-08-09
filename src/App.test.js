import App from "./App";
import {shallow} from "enzyme";
import React from "react";

describe('<App/>', () => {
    it('it should render a <div/>', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('div').length).toEqual(1);
    });
});