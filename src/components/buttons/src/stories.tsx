import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, optionsKnob, select } from '@storybook/addon-knobs';

import Button from '.';

// for sizing
const label = 'Size';
const options = {
    Small: 'small',
    Normal: '',
    Big: 'big',
};
const defaultValue = '';
const optionsObj = {
    display: 'inline-radio' as const,
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
        <Button
            clicked={(e: React.MouseEvent) => {
                e.preventDefault();
                // eslint-disable-next-line no-alert
                alert('You clicked on a button');
            }}
            className={`default ${optionsKnob(
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
    ));
