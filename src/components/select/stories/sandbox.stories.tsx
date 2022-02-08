import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from '../src/index';
import PageDoc from './development.mdx';

export default {
    title: 'Designs/Atoms/Select',
    component: Select,
    argTypes: {
        title: {
            defaultValue: 'Some title',
            description: 'Title for the Select',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string | null' },
                defaultValue: { summary: null },
            },
        },
        placeholder: {
            defaultValue: '',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        isSearchable: {
            defaultValue: true,
            control: {
                type: 'boolean',
            },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: true },
            },
        },
        bindingValue: {
            defaultValue: 'country',
            description: 'Binding value (data-value attr in select)',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        className: {
            defaultValue: 'select',
            description: 'Add any custom className to your Select',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'select' },
            },
        },
        selectClass: {
            defaultValue: '',
            description: 'Add any custom className to your Select input',
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
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = (args) => {
    const [countries] = React.useState([
        {
            country: 'Croatia',
            iso: 'HR',
            dialing_code: '+385',
        },
        {
            country: 'Serbia',
            iso: 'RS',
            dialing_code: '+385',
        },
        {
            country: 'England',
            iso: 'UK',
            dialing_code: '+385',
        },
        {
            country: 'France',
            iso: 'FR',
            dialing_code: '+385',
        },
        {
            country: 'Germany',
            iso: 'DE',
            dialing_code: '+385',
        },
        {
            country: 'Poland',
            iso: 'PL',
            dialing_code: '+385',
        },
    ]);

    const returnSelect = (data: any) => {
        const vals = {
            ...data,
        };

        // eslint-disable-next-line no-console
        console.log('Returned values from input :>> ', vals);
    };

    if (countries.length === 0) return <div />;

    return (
        <div
            style={{
                maxWidth: '400px',
                width: '100%',
                marginTop: '20px',
            }}
        >
            <Select {...args} returnValue={returnSelect} data={countries} />
        </div>
    );
};
