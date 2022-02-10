import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Accordion, AccordionItem } from '../src/index';
import PageDoc from './development.mdx';

const testData = [
    {
        title: 'Title 1',
        content: `Minim ad reprehenderit consectetur cupidatat ullamco laborum
        elit ad eu esse ad fugiat et anim.Et magna nulla anim ea aute
        magna reprehenderit consectetur exercitation proident minim.Ea
        laborum esse exercitation dolore eu eiusmod incididunt.`,
    },
    {
        title: 'Title 2',
        content: `Minim ad reprehenderit consectetur cupidatat ullamco laborum
        elit ad eu esse ad fugiat et anim.Et magna nulla anim ea aute
        magna reprehenderit consectetur exercitation proident minim.Ea
        laborum esse exercitation dolore eu eiusmod incididunt.`,
    },
    {
        title: 'Title 3',
        content: `Minim ad reprehenderit consectetur cupidatat ullamco laborum
        elit ad eu esse ad fugiat et anim.Et magna nulla anim ea aute
        magna reprehenderit consectetur exercitation proident minim.Ea
        laborum esse exercitation dolore eu eiusmod incididunt.`,
    },
];

export default {
    title: 'Designs/Atoms/Accordion',
    component: Accordion,
    argTypes: {
        title: {
            defaultValue: 'Default Accordion with AccordionItem',
            description: 'Define top title for the Accordion',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        className: {
            defaultValue: 'accordion',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'accordion' },
            },
            description: 'Specify custom className for override',
        },
        data: {
            defaultValue: testData,
            control: {
                type: 'object',
            },
            table: {
                type: { summary: 'array<TData>' },
                defaultValue: { summary: '' },
            },
            description: 'You can pass chlidren as an array of TData values',
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof Accordion>;

export const Default: ComponentStory<typeof Accordion> = (args) => (
    <Accordion {...args}>
        <AccordionItem title='Title 1'>
            <p>
                Minim ad reprehenderit consectetur cupidatat ullamco laborum
                elit ad eu esse ad fugiat et anim.Et magna nulla anim ea aute
                magna reprehenderit consectetur exercitation proident minim.Ea
                laborum esse exercitation dolore eu eiusmod incididunt.
            </p>
        </AccordionItem>

        <AccordionItem title='Title 2'>
            <p>
                Minim ad reprehenderit consectetur cupidatat ullamco laborum
                elit ad eu esse ad fugiat et anim.Et magna nulla anim ea aute
                magna reprehenderit consectetur exercitation proident minim.Ea
                laborum esse exercitation dolore eu eiusmod incididunt.
            </p>
        </AccordionItem>

        <AccordionItem title='Title 3'>
            <p>
                Minim ad reprehenderit consectetur cupidatat ullamco laborum
                elit ad eu esse ad fugiat et anim.Et magna nulla anim ea aute
                magna reprehenderit consectetur exercitation proident minim.Ea
                laborum esse exercitation dolore eu eiusmod incididunt.
            </p>
        </AccordionItem>
    </Accordion>
);

Default.args = {
    data: undefined,
};

Default.argTypes = {
    data: {
        control: {
            disable: true,
        },
    },
    icon: {
        control: {
            disable: true,
        },
    },
};

export const AccordionWithDataProp: ComponentStory<typeof Accordion> = (
    args
) => <Accordion {...args} />;

AccordionWithDataProp.args = {
    title: 'Accordion with data coming from data prop',
};

AccordionWithDataProp.argTypes = {
    icon: {
        control: {
            disable: true,
        },
    },
};
