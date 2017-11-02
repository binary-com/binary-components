import { configure } from '@storybook/react';

configure(() => {
    require('./inputs');
    require('./i18n');
    require('./graphical');
    require('./misc');
}, module);
