/* eslint-disable no-alert */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs';

import NotificationBox from '.';

storiesOf(`Designs/Models`, module)
    .addDecorator(withKnobs)
    .add('Notification Box', () => (
        <NotificationBox
            title={text('Title', 'This is notification box!')}
            message={text(
                'Message',
                'Ex incididunt sint consectetur consequat tempor.'
            )}
            isShowing={boolean('Is showing?', true)}
            okCallback={() => alert('clicked ok')}
            cancelCallback={() => alert('clicked cancel')}
            handleClose={() => boolean('Is showing?', true)}
            alertType={optionsKnob(
                'Alert type',
                { Success: 'success', Fail: 'fail' },
                'success',
                {
                    display: 'inline-radio',
                }
            )}
        />
    ));
