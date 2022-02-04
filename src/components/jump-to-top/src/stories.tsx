import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { MdKeyboardArrowUp } from 'react-icons/md';
import JumpToTop from '.';

const styles = {
    width: '100%',
    height: '2000px',
    position: 'relative' as const,
    border: '1px solid #000',
    backgroundColor: '#dfe4ed',
};

storiesOf(`Designs/Atoms/Jump to Top`, module)
    .addDecorator(withKnobs)
    .add('Default Jump to Top', () => (
        <div style={styles}>
            <JumpToTop visibleFrom={number('Visible from', 800)} />
        </div>
    ))
    .add('Component with custom icon and title', () => (
        <>
            <div id='jump-to-top' />
            <div style={styles}>
                <JumpToTop
                    icon={MdKeyboardArrowUp}
                    title='Jumper'
                    targetElement='#jump-to-top'
                    visibleFrom={number('Visible from', 800)}
                    animationDuration={number('Animation duration', 300)}
                />
            </div>
        </>
    ))
    .add('Component with custom icon', () => (
        <>
            <div id='jump-to-top' />
            <div style={styles}>
                <JumpToTop
                    icon={MdKeyboardArrowUp}
                    visibleFrom={number('Visible from', 800)}
                    animationDuration={number('Animation duration', 300)}
                />
            </div>
        </>
    ));
