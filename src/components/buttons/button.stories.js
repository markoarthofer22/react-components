import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, optionsKnob, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './button.component';

// for sizing
const label = 'Size';
const options = {
    Small: 'small',
    Normal: '',
    Big: 'big',
};
const defaultValue = '';
const optionsObj = {
    display: 'inline-radio',
};

// colors select
const colors = {
    Normal: 'default',
    Red: 'red',
    Blue: 'blue',
    Yellow: 'yellow',
    Pink: 'pink',
    Green: 'green',
};

storiesOf(`Designs/Atoms/Buttons`, module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <React.Fragment>
            <Button
                clicked={action({
                    onClick: `clikced on`,
                })}
                customClass={`default ${optionsKnob(
                    label,
                    options,
                    defaultValue,
                    optionsObj
                )}
                ${optionsKnob(
                    'Is Loading',
                    {
                        False: '',
                        True: 'loading',
                    },
                    '',
                    optionsObj
                )}
                ${select('Colors', colors, 'Normal')}
                `}
                title={text('Label', 'Click me')}
            />
        </React.Fragment>
    ));
