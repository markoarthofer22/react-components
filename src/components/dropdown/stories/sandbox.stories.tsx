import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from '../src/index';
import PageDoc from './development.mdx';

const data = [
    {
        id: 'drop_1',
        value: 'First value',
    },
    {
        id: 'drop_2',
        value: 'Second value',
    },
    {
        id: 'drop_3',
        value: 'Link with relative path',
        link: '/go-to-somewhere',
    },
    {
        id: 'drop_4',
        value: 'Link with absoulte URL - google',
        link: 'https://www.google.com',
    },
];

const returnSelect = (_data: any) => {
    const vals = {
        ..._data,
    };

    // eslint-disable-next-line no-alert
    alert(`Returned values from dropdown  ${JSON.stringify(vals)}`);
};

export default {
    title: 'Designs/Atoms/Dropdown',
    component: Dropdown,
    argTypes: {
        data: {
            defaultValue: data,
            type: {
                name: 'symbol',
                required: true,
            },
            control: {
                type: 'array',
            },
            table: {
                type: { summary: 'IData[]' },
                defaultValue: { summary: '[]' },
            },
            description: 'Set Dropdown data',
        },
        dropdownID: {
            defaultValue: '',
            type: {
                name: 'string',
                required: true,
            },
            description: 'Define unique ID for you Dropdown',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        dropdownClass: {
            defaultValue: '',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '""' },
            },
            description: 'Add additional class to Dropdown',
        },
        className: {
            defaultValue: 'dropdown',
            description: 'Add any custom className to your Dropdown',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'dropdown' },
            },
        },
        placeholder: {
            defaultValue: '',
            description: 'Add placeholder text to Dropdown',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        label: {
            defaultValue: 'Some label for dropdown',
            description: 'Add label text to Dropdown',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        isDefaultOpen: {
            defaultValue: false,
            description: 'Set the default state for the component',
            control: {
                type: 'boolean',
            },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
        defaultValue: {
            defaultValue: '',
            description:
                'Add predefined values for the Dropdown. Prop should exist by name in IData[]',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof Dropdown>;

export const Default: ComponentStory<typeof Dropdown> = (args) => (
    <div
        style={{
            maxWidth: '400px',
            width: '100%',
            marginTop: '20px',
        }}
    >
        <Dropdown
            {...args}
            // eslint-disable-next-line no-alert
            onChange={() => alert('on Change event')}
            returnValue={returnSelect}
        />
    </div>
);
