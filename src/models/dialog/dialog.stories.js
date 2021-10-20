import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Dialog from './dialog.component';

import GlobalThemeProvider from '../../themes/global-theme.provider';

storiesOf(`Designs/Models`, module)
    .addDecorator(withKnobs)
    .add('Dialog', () => (
        <GlobalThemeProvider>
            <Dialog
                title={text('Title', 'Click me if you want')}
                message={text('Message', 'This is text message')}
                isShowing={boolean('Is showing?', true)}
                okCallback={() => console.log('clicked ok')}
                cancelCallback={() => console.log('clicked cancle')}
            />
        </GlobalThemeProvider>
    ));
