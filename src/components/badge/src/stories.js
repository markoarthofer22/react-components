import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { AiOutlineQuestion } from 'react-icons/ai';
import Badge from './index';
import GlobalThemeProvider from '../../../themes/src/index';

const style = {
    width: 200,
    height: 200,
    borderRadius: '100%',
    position: 'relative',
    marginTop: '80px',
};

const img = {
    position: 'absolute',
    width: '100%',
    height: '100%',
};

storiesOf(`Designs/Atoms/Badge`, module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <GlobalThemeProvider>
            <div style={{ position: 'relative' }}>
                <div style={style}>
                    <img
                        style={img}
                        src='https://picsum.photos/id/237/400/400'
                        alt='Some radnom image'
                    />
                    <Badge value='90' />
                </div>
            </div>
        </GlobalThemeProvider>
    ))
    .add('With custom stlyes', () => (
        <GlobalThemeProvider>
            <div style={{ position: 'relative' }}>
                <div style={style}>
                    <img
                        style={img}
                        src='https://picsum.photos/id/237/400/400'
                        alt='Some radnom image'
                    />
                    <Badge
                        value='90'
                        stylesObj={{ backgroundColor: 'blue', color: 'pink' }}
                    />
                </div>
            </div>
        </GlobalThemeProvider>
    ))
    .add('With custom icon ', () => (
        <GlobalThemeProvider>
            <div style={{ position: 'relative' }}>
                <div style={style}>
                    <img
                        style={img}
                        src='https://picsum.photos/id/237/400/400'
                        alt='Some radnom image'
                    />
                    <Badge
                        value={<AiOutlineQuestion />}
                        stylesObj={{ width: 30, height: 30 }}
                    />
                </div>
            </div>
        </GlobalThemeProvider>
    ));
