import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { RiCloseCircleLine } from 'react-icons/ri';
import Popup from '.';

const style = {
    fontSize: '14px',
    display: 'flex' as const,
    alignItems: 'center' as const,
    flexDirection: 'column' as const,
    textAlign: 'center' as const,
};

storiesOf(`Designs/Atoms`, module)
    .addDecorator(withKnobs)
    .add('Popup', () => (
        <Popup
            icon={RiCloseCircleLine}
            // eslint-disable-next-line no-alert
            closePopup={() => alert('clicked close')}
        >
            <div style={style}>
                <h3>This is popup with some text</h3>
                <h4>Some H4 tag</h4>
            </div>
        </Popup>
    ));
