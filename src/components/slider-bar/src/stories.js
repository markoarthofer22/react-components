import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import SliderBar from './index';
import GlobalThemeProvider from '../../../themes/src/index';

storiesOf(`Designs/Atoms/Slider Bar`, module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <GlobalThemeProvider>
            <SliderBar
                initialValue={number('Initial value', 10)}
                min={number('Minimal value', 5)}
                max={number('Maximal value', 50)}
            />
        </GlobalThemeProvider>
    ))
    .add('With on change callback and formater', () => (
        <GlobalThemeProvider>
            <h4>Format kilograms to pounds</h4>
            <SliderBar
                initialValue={number('Initial value', 10)}
                min={number('Minimal value', 5)}
                max={number('Maximal value', 50)}
                formatFn={(value) => `${(value * 2.2).toFixed(2)} lbs`}
                onChange={(_) => console.log(_)}
            />
        </GlobalThemeProvider>
    ));
