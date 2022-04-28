import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { JumpToTop } from '../src/index';
import PageDoc from './development.mdx';

export default {
    title: 'Designs/Atoms/Jump To Top',
    component: JumpToTop,
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof JumpToTop>;

const styles = {
    width: '100%',
    height: '2000px',
    position: 'relative' as const,
    border: '1px solid #000',
    backgroundColor: '#dfe4ed',
};

export const Default: ComponentStory<typeof JumpToTop> = () => (
    <div style={styles}>
        <JumpToTop visibleFrom={800} />
    </div>
);

Default.storyName = 'Default Jump to Top';

export const Seconadry: ComponentStory<typeof JumpToTop> = () => (
    <>
        <div id='jump-to-top' />
        <div style={styles}>
            <JumpToTop
                icon={MdKeyboardArrowUp}
                title='Jumper'
                targetElement='#jump-to-top'
                visibleFrom={800}
                animationDuration={300}
            />
        </div>
    </>
);

Seconadry.storyName = 'Component with custom icon and title';

export const Tertiary: ComponentStory<typeof JumpToTop> = () => (
    <>
        <div id='jump-to-top' />
        <div style={styles}>
            <JumpToTop
                icon={MdKeyboardArrowUp}
                visibleFrom={800}
                animationDuration={300}
            />
        </div>
    </>
);

Tertiary.storyName = 'Component with custom icon';
