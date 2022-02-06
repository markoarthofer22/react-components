import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../src/index';
import PageDoc from './development.mdx';

export default {
    title: 'Designs/Atoms/Button',
    component: Button,
    argTypes: {
        title: {
            defaultValue: 'Button text',
            type: {
                name: 'string',
                required: true,
            },
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Button text' },
            },
            description: 'Specify the title for the button',
        },
        size: {
            defaultValue: 'default',
            description: 'Change size of the button',
            table: {
                type: { summary: 'small | default | big ' },
                defaultValue: { summary: 'default' },
            },
            control: {
                type: 'select',
                options: {
                    Small: 'small',
                    Normal: 'default',
                    Big: 'big',
                },
            },
        },
        color: {
            defaultValue: 'blue',
            description: 'Select the color from an array of predefined colors',
            table: {
                type: {
                    summary:
                        "'' | default | red | blue | yellow | pink | green",
                },
                defaultValue: { summary: 'default' },
            },
            control: {
                type: 'select',
                options: {
                    None: '',
                    Normal: 'default',
                    Red: 'red',
                    Blue: 'blue',
                    Yellow: 'yellow',
                    Pink: 'pink',
                    Green: 'green',
                },
            },
        },
        isLoading: {
            defaultValue: false,
            description: 'Show loader for the button',
            control: {
                type: 'boolean',
            },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
        className: {
            defaultValue: '',
            description: 'Add any custom className to your button',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        clicked: {
            type: {
                name: 'function',
                required: true,
            },
            table: {
                type: { summary: 'function' },
                defaultValue: { summary: '() => {}' },
            },
            action: 'clicked',
        },
        attributes: {
            defaultValue: [],
            description: 'Add button attributes',
            control: {
                type: null,
            },
            table: {
                type: { summary: 'array<any>' },
                defaultValue: { summary: [] },
            },
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
    <Button {...args} />
);
