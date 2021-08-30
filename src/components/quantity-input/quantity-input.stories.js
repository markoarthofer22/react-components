import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import QuantityInput from './quantity-input.component';

const onInputChange = (value) => {
    console.log('returned value from onChange :>> ', value);
};

storiesOf(`Designs/Atoms`, module)
    .addDecorator(withKnobs)
    .add('Quantity Input', () => (
        <React.Fragment>
            <h3>Quantity Input without default value</h3>
            <QuantityInput
                maxValue={text('Max entered value', '99')}
                onChange={onInputChange}
                defaultValue='0'
            />

            <h3 style={{ marginTop: 30 }}>Quantity Input with default value</h3>
            <QuantityInput
                maxValue={text('Max entered value', '99')}
                onChange={onInputChange}
                defaultValue='44'
            />
        </React.Fragment>
    ));
