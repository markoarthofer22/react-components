import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '.';

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
            defaultValue: 'big',
            description: 'Change size of the button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Normal' },
            },
            control: {
                type: 'select',
                options: {
                    Small: 'small',
                    Normal: '',
                    Big: 'big',
                },
            },
        },
        color: {
            defaultValue: 'blue',
            description: 'Select the color from an array of predefined colors',
            table: {
                type: { summary: 'string' },
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
            defaultValue: 'default',
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
            table: {
                type: { summary: 'function' },
                defaultValue: { summary: '() => {}' },
            },
            action: 'clicked',
        },
    },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
    <Button {...args} />
);
