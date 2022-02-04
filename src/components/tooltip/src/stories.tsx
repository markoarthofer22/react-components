import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { AiOutlineQuestion } from 'react-icons/ai';
import Tooltip from '.';

const style = {
    fontSize: '14px',
    display: 'flex' as const,
    alignItems: 'center' as const,
    position: 'relative' as const,
    marginTop: '80px',
};

storiesOf(`Designs/Atoms`, module)
    .addDecorator(withKnobs)
    .add('Tooltip', () => (
        <div>
            <p style={style}>
                This is custom text that has tooltip
                <Tooltip
                    icon={AiOutlineQuestion}
                    title={text(
                        'Tooltip text',
                        'Esse esse irure dolor aliqua pariatur esse excepteur voluptate mollit ad eiusmod Lorem.'
                    )}
                    className={text('Custom Class', '')}
                />
            </p>
        </div>
    ));
