import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SliderBar } from '../src/index';
import PageDoc from './development.mdx';

export default {
    title: 'Designs/Atoms/Slider Bar',
    component: SliderBar,
    argTypes: {
        initialValue: {
            defaultValue: 10,
            description: 'Value from which Slider starts',
            type: {
                name: 'number',
                required: true,
            },
            control: {
                type: 'number',
            },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: null },
            },
        },
        min: {
            defaultValue: 0,
            description: 'Value from which Slider starts',
            type: {
                name: 'number',
                required: true,
            },
            control: {
                type: 'number',
            },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0 },
            },
        },
        max: {
            defaultValue: 100,
            description: 'Value from which Slider starts',
            type: {
                name: 'number',
                required: true,
            },
            control: {
                type: 'number',
            },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 100 },
            },
        },
        className: {
            defaultValue: 'slider-bar',
            description: 'Add any custom className to your SliderBar',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'slider-bar' },
            },
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof SliderBar>;

export const Default: ComponentStory<typeof SliderBar> = (args) => (
    <SliderBar {...args} />
);

export const Secondary: ComponentStory<typeof SliderBar> = (args) => (
    <>
        <h4>Format kilograms to pounds</h4>
        <SliderBar
            {...args}
            formatFn={(value) => `${(value * 2.2).toFixed(2)} lbs`}
            // eslint-disable-next-line no-console
            onChange={(_) => console.log(_)}
        />
    </>
);

Secondary.storyName = 'With on change callback and formater';
