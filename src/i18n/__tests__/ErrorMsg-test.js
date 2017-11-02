import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import ErrorMsg from '../ErrorMsg';
import P from '../P';

describe('<ErrorMsg />', () => {
    it('does not render when no properties provided', () => {
        const wrapper = shallow(<ErrorMsg />);
        expect(wrapper.type()).toEqual(null);
    });

    it('renders P component', () => {
        const wrapper = mount(
            <IntlProvider locale="en">
                <ErrorMsg className="someClass" text="some" />
             </IntlProvider>
        );
        expect(wrapper.find(P).length).toEqual(1);
    });

    it('appends className passed to classes of P', () => {
        const wrapper = shallow(<ErrorMsg className="someClass" text="some" />);
        expect(wrapper.prop('className')).toContain('someClass');
    });
});
