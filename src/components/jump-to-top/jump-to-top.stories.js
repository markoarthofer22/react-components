import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { MdKeyboardArrowUp } from 'react-icons/md';
import JumpToTop from './jump-to-top.component';

const styles = {
    width: '100%',
    height: '2000px',
    position: 'relative',
    border: '1px solid #000',
    backgroundColor: '#dfe4ed',
};

storiesOf(`Designs/Atoms/Jump to Top`, module)
    .addDecorator(withKnobs)
    .add('Default Jump to Top', () => (
        <React.Fragment>
            <div style={styles}>
                <JumpToTop
                    visibleFrom={number('Visible from', 800)}
                    customClass={text('Custom class', '')}
                />
            </div>
        </React.Fragment>
    ))
    .add('Component with custom icon and title', () => (
        <React.Fragment>
            <div id='jump-to-top'></div>
            <div style={styles}>
                <JumpToTop
                    icon={MdKeyboardArrowUp}
                    title='Jumper'
                    targetElement='#jump-to-top'
                    visibleFrom={number('Visible from', 800)}
                    animationDuration={number('Animation duration', 300)}
                    customClass={text('Custom class', '')}
                />
            </div>
        </React.Fragment>
    ))
    .add('Component with custom icon', () => (
        <React.Fragment>
            <div id='jump-to-top'></div>
            <div style={styles}>
                <JumpToTop
                    icon={MdKeyboardArrowUp}
                    visibleFrom={number('Visible from', 800)}
                    animationDuration={number('Animation duration', 300)}
                    customClass={text('Custom class', '')}
                />
            </div>
        </React.Fragment>
    ));
