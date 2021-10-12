import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { RiCloseCircleLine } from 'react-icons/ri';
import Popup from './popup.component';
import GlobalThemeProvider from '../../themes/global-theme.provider';

const style = {
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
};

storiesOf(`Designs/Atoms`, module)
    .addDecorator(withKnobs)
    .add('Popup', () => (
        <GlobalThemeProvider>
            <Popup
                customClass={text('Custom Class', '')}
                icon={RiCloseCircleLine}
                closePopup={() => console.log('clicked close')}
            >
                <div style={style}>
                    <h3>This is popup with some text</h3>
                    <h4>Some H4 tag</h4>
                </div>
            </Popup>
        </GlobalThemeProvider>
    ));
