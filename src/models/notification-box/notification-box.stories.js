import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs';
import GlobalThemeProvider from '../../themes/global-theme.provider';
import NotificationBox from './notification-box.component';

const valuesObj = {
    Success: 'success',
    Fail: 'fail',
};

storiesOf(`Designs/Models`, module)
    .addDecorator(withKnobs)
    .add('Notification Box', () => (
        <GlobalThemeProvider>
            <NotificationBox
                title={text('Title', 'This is notification box!')}
                message={text(
                    'Message',
                    'Ex incididunt sint consectetur consequat tempor.'
                )}
                isShowing={boolean('Is showing?', true)}
                okCallback={() => console.log('clicked ok')}
                cancelCallback={() => console.log('clicked cancle')}
                handleClose={() => boolean('Is showing?', true)}
                alertType={optionsKnob('Alert type', valuesObj, 'success', {
                    display: 'inline-radio',
                })}
            />
        </GlobalThemeProvider>
    ));
