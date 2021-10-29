import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import HeroBox from './hero-box.component';
import GlobalThemeProvider from '../../themes/global-theme.provider';

storiesOf(`Designs/Models`, module)
    .addDecorator(withKnobs)
    .add('Hero Box', () => (
        <GlobalThemeProvider>
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
        </GlobalThemeProvider>
    ));
