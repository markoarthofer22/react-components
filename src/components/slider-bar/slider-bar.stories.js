import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import SliderBar from './slider-bar.components';

storiesOf(`Designs/Atoms/Slider Bar`, module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <React.Fragment>
            <SliderBar
                initialValue={number('Initial value', 10)}
                min={number('Minimal value', 5)}
                max={number('Maximal value', 50)}
            />
        </React.Fragment>
    ))
    .add('With on change callback and formater', () => (
        <React.Fragment>
            <h4>Format kilograms to pounds</h4>
            <SliderBar
                initialValue={number('Initial value', 10)}
                min={number('Minimal value', 5)}
                max={number('Maximal value', 50)}
                formatFn={(value) => `${(value * 2.2).toFixed(2)} lbs`}
                onChange={(_) => console.log(_)}
            />
        </React.Fragment>
    ));
