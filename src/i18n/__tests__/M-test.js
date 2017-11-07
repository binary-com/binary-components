import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import M from '../M';

describe('<M />', () => {
    it('renders a translated span', () => {
        const wrapper = mount(
            <IntlProvider locale="en">
                <M m="someText" />
             </IntlProvider>
        );
        expect(wrapper.find('span').length).toEqual(1);
    });

    it('can translate text', () => {
        const wrapper = shallow(<M m="some text" />);
        expect(wrapper.find('FormattedMessage').length).toEqual(1);
    });
});
