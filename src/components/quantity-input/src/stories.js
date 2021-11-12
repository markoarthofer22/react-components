import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import QuantityInput from './';

const onInputChange = (value) => {
    console.log('returned value from onChange :>> ', value);
};

storiesOf(`Designs/Atoms`, module)
    .addDecorator(withKnobs)
    .add('Quantity Input', () => (
        <>
            <h3>Quantity Input without default value</h3>
            <QuantityInput
                maxValue={text('Max entered value', '99')}
                onChange={onInputChange}
            />

            <h3 style={{ marginTop: 30 }}>Quantity Input with default value</h3>
            <QuantityInput
                maxValue={text('Max entered value', '99')}
                onChange={onInputChange}
                defaultValue='44'
            />
        </>
    ));
