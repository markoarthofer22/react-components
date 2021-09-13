import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import { VscCheck, VscChromeClose } from 'react-icons/vsc';
import SwitchButton from './switch-button.component';

const font = {
    fontSize: 16,
    margin: '10px 0',
};

storiesOf(`Designs/Atoms/Switch button`, module)
    .addDecorator(withKnobs)
    .add('Default', () => {
        const [isChecked, setIsChecked] = useState(false);

        return (
            <React.Fragment>
                <div>
                    <p style={font}>Switch button</p>
                    <SwitchButton
                        id='current-select'
                        small={boolean('Small', false)}
                        disabled={boolean('Disabled', false)}
                        checked={isChecked}
                        onChange={(checked) => setIsChecked(checked)}
                        name='current-select'
                        customClass={text('Custom class', '')}
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
            </React.Fragment>
        );
    })
    .add('With Icons', () => {
        const [isChecked, setIsChecked] = useState(false);

        return (
            <React.Fragment>
                <div>
                    <p style={font}>Switch button with label icons</p>
                    <SwitchButton
                        id='current-select-with-icon'
                        small={boolean('Small', false)}
                        disabled={boolean('Disabled', false)}
                        checked={isChecked}
                        onChange={(checked) => setIsChecked(checked)}
                        name='current-select-with-icon'
                        customClass={text('Custom class', '')}
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
            </React.Fragment>
        );
    });
