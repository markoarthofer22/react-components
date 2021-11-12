import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import HeroBox from './';

storiesOf(`Designs/Models`, module)
    .addDecorator(withKnobs)
    .add('Hero Box', () => (
        <HeroBox
            bgImage={text(
                'Background Image',
                'https://www.foragerscs.com/assets/home-bg-full.jpg'
            )}
            title={text('Title', 'This is main title!')}
            subtitle={text(
                'Subtitle',
                'Laboris officia excepteur enim proident.'
            )}
            hasOverlay={boolean('Has overlay?', true)}
        />
    ));
