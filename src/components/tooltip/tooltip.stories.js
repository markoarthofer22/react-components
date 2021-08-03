import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { AiOutlineQuestion } from 'react-icons/ai';
import Tooltip from './tooltip.component';

const style = {
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginTop: '80px',
};

storiesOf(`Designs/Atoms`)
    .addDecorator(withKnobs)
    .add('Tooltip', () => (
        <React.Fragment>
            <div>
                <p style={style}>
                    This is custom text that has tooltip
                    <Tooltip
                        icon={AiOutlineQuestion}
                        title={text(
                            'Tooltip text',
                            'Esse esse irure dolor aliqua pariatur esse excepteur voluptate mollit ad eiusmod Lorem.'
                        )}
                        customClass={text('Custom Class', '')}
                    />
                </p>
            </div>
        </React.Fragment>
    ));
