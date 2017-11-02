import React from 'react';
import { shallow } from 'enzyme';
import NumberColored from '../NumberColored';

describe('<NumberColored />', () => {
	it('should contain the class number-positive ', () => {
		const wrapper = shallow(
			<NumberColored value={3} currency="USD" />
		);
		expect(wrapper.getElements().props.className).toEqual('number-positive');
	});

	it('should contain the class number-negative ', () => {
		const wrapper = shallow(
			<NumberColored value={-5} currency="USD" />
		);
		expect(wrapper.getElements().props.className).toEqual('number-negative');
	});
});
