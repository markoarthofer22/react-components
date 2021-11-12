import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';
import { VscCheck, VscChromeClose } from 'react-icons/vsc';
import SwitchButton from './index';
import GlobalThemeProvider from '../../../themes/src/index';

const font = {
    fontSize: 16,
    margin: '10px 0',
};

storiesOf(`Designs/Atoms/Switch button`, module)
    .addDecorator(withKnobs)
    .add('Default', () => {
        const [isChecked, setIsChecked] = useState(false);

        return (
            <GlobalThemeProvider>
                <div>
                    <p style={font}>Switch button</p>
                    <SwitchButton
                        id='current-select'
                        small={boolean('Small', false)}
                        disabled={boolean('Disabled', false)}
                        checked={isChecked}
                        onChange={(checked) => setIsChecked(checked)}
                        name='current-select'
                        optionLabels={object('Option Labels', {
                            yes: 'yes',
                            no: 'no',
                        })}
                    />
                </div>

                <p style={font}>
                    Current state of Switch:{' '}
                    <strong style={{ color: '#1693c5' }}>
                        {isChecked ? 'checked' : 'not checked'}
                    </strong>
                </p>
            </GlobalThemeProvider>
        );
    })
    .add('With Icons', () => {
        const [isChecked, setIsChecked] = useState(false);

        return (
            <GlobalThemeProvider>
                <div>
                    <p style={font}>Switch button with label icons</p>
                    <SwitchButton
                        id='current-select-with-icon'
                        small={boolean('Small', false)}
                        disabled={boolean('Disabled', false)}
                        checked={isChecked}
                        onChange={(checked) => setIsChecked(checked)}
                        name='current-select-with-icon'
                        icon={{
                            yes: <VscCheck />,
                            no: <VscChromeClose />,
                        }}
                    />
                </div>

                <p style={font}>
                    Current state of Switch:{' '}
                    <strong style={{ color: '#1693c5' }}>
                        {isChecked ? 'checked' : 'not checked'}
                    </strong>
                </p>
            </GlobalThemeProvider>
        );
    });
