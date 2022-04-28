import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QuantityInput } from '../src/index';

import PageDoc from './development.mdx';

export default {
    title: 'Designs/Atoms/Quantity Input',
    component: QuantityInput,
    argTypes: {
        maxValue: {
            defaultValue: '99',
            description: 'Set the maxValue available for the input',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '99' },
            },
        },
        defaultValue: {
            defaultValue: '0',
            description: 'Set the default value available for the input',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '0' },
            },
        },
        className: {
            defaultValue: 'quantity-input',
            description: 'Add any custom className to your QuantityInput',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'quantity-input' },
            },
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof QuantityInput>;

const onInputChange = (value: string) =>
    // eslint-disable-next-line no-console
    console.log(`returned value from onChange :>> ${value} `);

export const Default: ComponentStory<typeof QuantityInput> = (args) => (
    <>
        <h3>Quantity Input without default value</h3>
        <QuantityInput {...args} onChange={onInputChange} />

        <h3 style={{ marginTop: 30 }}>Quantity Input with default value</h3>
        <QuantityInput {...args} onChange={onInputChange} defaultValue='44' />
    </>
);
