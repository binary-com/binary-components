import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';
import Clock from '../src/misc/Clock';
import DigitStatsChart from '../src/misc/DigitStatsChart';
import Tab from '../src/misc/Tab';
import TabList from '../src/misc/TabList';

storiesOf('Misc', module)
    .add('Clock', () =>
        <Clock />
    )
    .add('DigitStatsChart', () =>
        <DigitStatsChart stats={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
    )
    .add('TabList', () =>
        <IntlProvider locale="en">
            <TabList onChange={e => window.console.log(e)} activeIndex={1}>
                <Tab text="First Tab" />
                <Tab text="Second Tab" tooltip="Tooltip" />
            </TabList>
        </IntlProvider>
    );
