import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Hamburger } from '../src/index';
import PageDoc from './development.mdx';

const onChange = () => {
    // eslint-disable-next-line no-console
    console.log('clicked onChange!');
};

const styles = {
    width: '200px',
    height: '200px',
    position: 'relative' as const,
    border: '1px solid #000',
};

export default {
    title: 'Designs/Atoms/Hamburger',
    component: Hamburger,
    argTypes: {
        isOpen: {
            defaultValue: true,
            type: {
                name: 'boolean',
                required: true,
            },
            control: {
                type: 'boolean',
            },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
        className: {
            defaultValue: 'hamburger',
            description: 'Add any custom className to your Hamburger',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'hamburger' },
            },
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof Hamburger>;

export const Default: ComponentStory<typeof Hamburger> = (args) => (
    <div style={styles}>
        <Hamburger
            {...args}
            disableOnDesktop={false}
            onChange={() => onChange()}
        />
    </div>
);
