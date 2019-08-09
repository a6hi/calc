import {shallow} from 'enzyme';
import React from 'react';
import Calculator from "./Calculator";

describe('Calculator',()=>{
    it('should render a div',()=>{
        let wrapper = shallow(<Calculator/>);
        expect(wrapper.find('div').length).toEqual(1);
    })
});