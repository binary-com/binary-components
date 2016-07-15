import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ControlledNumericInput from '../ControlledNumericInput';

describe('<ControlledNumericInput />', () => {
    it('renders with no properties', () => {
        const wrapper = shallow(<ControlledNumericInput />);
        expect(wrapper.type()).to.equal('div');
    });

    it('clicking the up button changes the value', () => {
        const onButtonClick = sinon.spy();
        const wrapper = shallow(<ControlledNumericInput onChange={onButtonClick} />);
        wrapper.find('.step-up').simulate('click');
        expect(onButtonClick).to.have.property('callCount', 1);
    });
});
