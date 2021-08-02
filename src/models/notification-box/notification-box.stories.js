import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs';
import NotificationBox from './notification-box.component';

const valuesObj = {
    Success: 'success',
    Fail: 'fail',
};

storiesOf(`Designs/Models`)
    .addDecorator(withKnobs)
    .add('Notification Box', () => (
        <React.Fragment>
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
        </React.Fragment>
    ));
