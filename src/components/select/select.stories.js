import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import Select from './select.component';

storiesOf(`Designs/Atoms`, module)
    .addDecorator(withKnobs)

    .add('Select', () => {
        const [countries, setCountries] = React.useState([]);

        React.useEffect(() => {
            fetch(
                'https://restcountries.eu/rest/v2/all?fields=name;alpha3Code;callingCodes'
            )
                .then((response) => response.json())
                .then((data) => {
                    setCountries(
                        data.map((item) => ({
                            country: item.name,
                            iso: item.alpha3Code,
                            dialing_code: item.callingCodes[0],
                        }))
                    );
                });
        }, []);

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
                style={{ maxWidth: '400px', width: '100%', marginTop: '20px' }}
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
