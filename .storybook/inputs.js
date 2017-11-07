import React from 'react';
import { storiesOf } from '@storybook/react';
import NumericInput from '../src/input/NumericInput';
import DateOfBirth from '../src/input/DateOfBirth';

storiesOf('Inputs', module)
    .add('NumericInput', () =>
        <NumericInput min={0} max={500} defaultValue={10} />
    )
    .add('NumericInput (integer)', () =>
        <NumericInput min={0} max={500} integer />
    )
    .add('DateOfBirth', () =>
        <DateOfBirth />
    );
