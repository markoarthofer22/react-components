import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import GlobalLoader from './global.loader.component';

storiesOf(`Designs/Atoms`, module)
    .addDecorator(withKnobs)
    .add('Loader', () => (
        <React.Fragment>
            <GlobalLoader
                customClass={text('Custom Class', '')}
                isLoading={boolean('Is Loading', true)}
            />
        </React.Fragment>
    ));
