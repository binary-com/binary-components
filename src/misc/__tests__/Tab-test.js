import React from 'react';
import { shallow } from 'enzyme';
import Tab from '../Tab';

describe('<Tab />', () => {
    it('should render', () => {
        const wrapper = shallow(<Tab />);
        expect(wrapper).toBeDefined();
    });

    it('should render M component inside', () => {
        const wrapper = shallow(<Tab text="Hello" />);
        expect(wrapper.find('M').length).toEqual(1);
    });

    it('should render a close button when closable is true', () => {
        const wrapper = shallow(<Tab text="Hello" closable />);
        expect(wrapper.find('CloseButton').length).toEqual(1);
    });

    it('should not render a close button when closable is not true', () => {
        const wrapper = shallow(<Tab text="Hello" />);
        expect(wrapper.find('CloseButton').length).toEqual(0);
    });

    it('should render "text" property if showText is false', () => {
        const wrapper = shallow(<Tab imgSrc="example.com/img.png" />);
        expect(wrapper.find('img').length).toEqual(1);
    });
});
