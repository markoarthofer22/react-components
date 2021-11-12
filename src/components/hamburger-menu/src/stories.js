import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Hamburger from './';

const onChange = () => {
    console.log('clicked onChange!');
};

const styles = {
    width: '200px',
    height: '200px',
    position: 'relative',
    border: '1px solid #000',
};

storiesOf(`Designs/Atoms`, module)
    .addDecorator(withKnobs)
    .add('Hamburger', () => (
        <div style={styles}>
            <Hamburger
                isOpen={true}
                disableOnDesktop={false}
                onChange={() => onChange()}
            />
        </div>
    ));
