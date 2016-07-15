import React from 'react';
import { storiesOf } from '@kadira/storybook';
import NumericInput from '../src/NumericInput';
import DateOfBirth from '../src/DateOfBirth';

storiesOf('Inputs', module)
    .add('NumericInput', () =>
        <NumericInput />
    )
    .add('DateOfBirth', () =>
        <DateOfBirth />
    );
