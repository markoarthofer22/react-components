import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Dialog from './dialog.component';

storiesOf(`Components`)
    .addDecorator(withKnobs)
    .add('Dialog', () => (
        <React.Fragment>
            <Dialog
                title='Click me if you want'
                message='This is text message'
                isShowing={true}
                okCallback={() => console.log('clicked ok')}
                cancelCallback={() => console.log('clicked cancle')}
            />
        </React.Fragment>
    ));
