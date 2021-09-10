import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import HeroBox from './hero-box.component';

storiesOf(`Designs/Models`, module)
    .addDecorator(withKnobs)
    .add('Hero Box', () => (
        <React.Fragment>
            <HeroBox
                customClass={text('Custom class', '')}
                bgImage={text(
                    'Background Image',
                    'https://www.foragerscs.com/assets/home-bg-full.jpg'
                )}
                title={text('Title', 'This is main title!')}
                subtitle={text(
                    'Subtitle',
                    'Laboris officia excepteur enim proident.'
                )}
                columnSize={text(
                    'Column size (use bootstrap values)',
                    'col-12 col-sm-8'
                )}
                hasOverlay={boolean('Has overlay?', true)}
            />
        </React.Fragment>
    ));
