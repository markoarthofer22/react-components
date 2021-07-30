import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Button from './button.component';

storiesOf(`Components`)
    .addDecorator(withKnobs)
    .add('Button', () => (
        <React.Fragment>
            <Button customClass='button-blue' title='Click me' />
        </React.Fragment>
    ));
