import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Hamburger from './hamburger.component';

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
        <React.Fragment>
            <div style={styles}>
                <Hamburger
                    isOpen={false}
                    disableOnDesktop={false}
                    customClass={text('Custom class', '')}
                    onChange={() => onChange()}
                />
            </div>
        </React.Fragment>
    ));