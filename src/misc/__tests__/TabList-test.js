import React from 'react';
import { shallow } from 'enzyme';
import TabList from '../TabList';
import Tab from '../Tab';

describe('<TabList />', () => {
    it('should render', () => {
        const wrapper = shallow(<TabList />);
        expect(wrapper).toBeDefined();
    });

    it('should render a single item if contained', () => {
        const wrapper = shallow(<TabList>Hello</TabList>);
        expect(wrapper.getElements().length).toEqual(1);
    });

    it('should render as many children as contained', () => {
        const wrapper = shallow(
            <TabList>
                <span />
                <span />
                <span />
            </TabList>
        );
        expect(wrapper.find('span').length).toEqual(3);
    });

    it('should set at least one child to selected', () => {
        const wrapper = shallow(
            <TabList>
                <span />
            </TabList>
        );
        expect(wrapper.find('span[selected]').length).toEqual(1);
    });

    it('a click on its contents will call onTabClick', () => {
        const onTabClick = jest.fn();
        const wrapper = shallow(
            <TabList onChange={onTabClick}>
                <Tab />
            </TabList>
        );
        wrapper.find('Tab').simulate('click');
        expect(onTabClick).toHaveBeenCalled();
    });
});
