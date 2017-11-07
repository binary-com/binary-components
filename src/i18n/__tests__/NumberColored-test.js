import React from 'react';
import { shallow } from 'enzyme';
import NumberColored from '../NumberColored';

describe('<NumberColored />', () => {
	it('should contain the class number-positive ', () => {
		const wrapper = shallow(
			<NumberColored value={3} currency="USD" />
		);
		expect(wrapper.hasClass('number-positive')).toBe(true);
	});

	it('should contain the class number-negative ', () => {
		const wrapper = shallow(
			<NumberColored value={-5} currency="USD" />
		);
		expect(wrapper.hasClass('number-negative')).toBe(true);
	});
});
