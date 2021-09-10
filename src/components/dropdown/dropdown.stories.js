import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import Dropdown from './dropdown.component';

storiesOf(`Designs/Atoms`, module)
    .addDecorator(withKnobs)
    .add('Dropdown', () => {
        const data = [
            {
                id: 'drop_1',
                value: 'First value',
            },
            {
                id: 'drop_2',
                value: 'Second value',
            },
            {
                id: 'drop_3',
                value: 'Link with relative path',
                link: '/go-to-somewhere',
            },
            {
                id: 'drop_4',
                value: 'Link with absoulte URL - google',
                link: 'https://www.google.com',
            },
        ];

        const returnSelect = (_data) => {
            const vals = {
                ..._data,
            };

            // eslint-disable-next-line no-console
            console.log('Returned values from dropdown :>> ', vals);
        };

        return (
            <div
                style={{ maxWidth: '400px', width: '100%', marginTop: '20px' }}
            >
                <Dropdown
                    dropdownClass={text('Dropdown Class', '')}
                    placeholder={text('Placeholder', 'Select from dropdown')}
                    label={text('Label', 'Some label')}
                    dropdownID={text('Dropdown ID', 'dropdown1')}
                    isDefaultOpen={boolean('Is dropdown open?', false)}
                    defaultValue={text(
                        'Default value (value field in data)',
                        ''
                    )}
                    // eslint-disable-next-line no-console
                    onChange={() => console.log('clicked on change')}
                    returnValue={returnSelect}
                    data={object('Data', data)}
                />
            </div>
        );
    });
