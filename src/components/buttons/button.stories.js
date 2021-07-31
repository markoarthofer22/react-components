import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Button from './button.component';

storiesOf(`Components/Buttons`)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <React.Fragment>
            <Button customClass='default' title='Click me' />
        </React.Fragment>
    ))
    .add('Red', () => (
        <React.Fragment>
            <Button customClass='red' title='Click me' />
        </React.Fragment>
    ))
    .add('Blue', () => (
        <React.Fragment>
            <Button customClass='blue' title='Click me' />
        </React.Fragment>
    ))
    .add('Yellow', () => (
        <React.Fragment>
            <Button customClass='yellow' title='Click me' />
        </React.Fragment>
    ))
    .add('Big', () => (
        <React.Fragment>
            <Button customClass='big red' title='Click me' />
        </React.Fragment>
    ))
    .add('Small', () => (
        <React.Fragment>
            <Button customClass='small blue' title='Click me' />
        </React.Fragment>
    ))
    .add('Big loading', () => (
        <React.Fragment>
            <Button customClass='big blue' isLoading={true} title='Click me' />
        </React.Fragment>
    ));
