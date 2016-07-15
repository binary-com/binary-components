import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import NumericInput from '../NumericInput';

describe('<NumericInput />', () => {
    it('renders with no properties', () => {
        const wrapper = shallow(<NumericInput />);
        expect(wrapper.type()).to.equal('div');
    });

    it('clicking the up button changes the value', () => {
        const onButtonClick = sinon.spy();
        const wrapper = shallow(<NumericInput onChange={onButtonClick} />);
        wrapper.find('.step-up').simulate('click');
        expect(onButtonClick).to.have.property('callCount', 1);
    });

    it('should handle defaultValue', () => {
        const wrapper = shallow(<NumericInput defaultValue={20} />);
        expect(wrapper.find('input')).to.have.length(1);
    });

    it('should throw when both defaultValue and value exist', () => {
        const shouldThrow = () => shallow(<NumericInput defaultValue={20} value={30} />);
        expect(shouldThrow).to.throw(Error);
    });
});
