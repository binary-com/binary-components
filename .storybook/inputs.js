import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ControlledNumericInput from '../src/ControlledNumericInput';
import DateOfBirth from '../src/DateOfBirth';

storiesOf('Inputs', module)
    .add('NumericInput', () =>
        <ControlledNumericInput />
    )
    .add('DateOfBirth', () =>
        <DateOfBirth />
    );
