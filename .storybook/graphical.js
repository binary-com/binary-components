import React from 'react';
import { storiesOf } from '@kadira/storybook';
import CloseButton from '../src/graphical/CloseButton';
import BackButton from '../src/graphical/BackButton';
import Direction from '../src/graphical/Direction';
import DownArrow from '../src/graphical/DownArrow';
import Info from '../src/graphical/Info';
import Logo from '../src/graphical/Logo';
import LogoSpinner from '../src/graphical/LogoSpinner';

storiesOf('Graphical', module)
    .add('CloseButton', () =>
        <CloseButton />
    )
    .add('BackButton', () =>
        <BackButton />
    )
    .add('Info', () =>
        <Info />
    )
    .add('Direction', () =>
        <div>
            <Direction diff={-1} />
            <Direction />
            <Direction diff={1} />
        </div>
    )
    .add('DownArrow', () =>
        <DownArrow />
    )
    .add('Logo', () =>
        <Logo />
    )
    .add('LogoSpinner', () =>
        <LogoSpinner />
    );
