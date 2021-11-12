import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import Select from './';

storiesOf(`Designs/Atoms`, module)
    .addDecorator(withKnobs)
    .add('Select', () => {
        const [countries] = React.useState([
            {
                country: 'Croatia',
                iso: 'HR',
                dialing_code: '+385',
            },
            {
                country: 'Serbia',
                iso: 'RS',
                dialing_code: '+385',
            },
            {
                country: 'England',
                iso: 'UK',
                dialing_code: '+385',
            },
            {
                country: 'France',
                iso: 'FR',
                dialing_code: '+385',
            },
            {
                country: 'Germany',
                iso: 'DE',
                dialing_code: '+385',
            },
            {
                country: 'Poland',
                iso: 'PL',
                dialing_code: '+385',
            },
        ]);

        const returnSelect = (data) => {
            const vals = {
                ...data,
            };

            // eslint-disable-next-line no-console
            console.log('Returned values from input :>> ', vals);
        };

        if (countries.length === 0) return <div></div>;

        return (
            <div
                style={{
                    maxWidth: '400px',
                    width: '100%',
                    marginTop: '20px',
                }}
            >
                <Select
                    title={text('Select Title', 'Select')}
                    data={countries}
                    selectClass={text('Custom Class', '')}
                    placeholder={text('Placeholder', 'Countries')}
                    returnValue={returnSelect}
                    isSearchable={boolean('Is Searchable', true)}
                    bindingValue={text(
                        'Binding value (data-value attr in select)',
                        'country'
                    )}
                />
            </div>
        );
    });
