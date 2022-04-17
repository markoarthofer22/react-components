/* eslint-disable no-alert */
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
    FcLandscape,
    FcLinux,
    FcFlowChart,
    FcFolder,
    FcHighBattery,
} from 'react-icons/fc';
import { StyledListItem, StyledList } from '../src/index';
import PageDoc from './development.mdx';

const testData = [
    {
        icon: FcLandscape,
        content: `Minim ad reprehenderit consectetur cupidatat ullamco laborum
        elit ad eu esse ad fugiat et anim.`,
        clicked: () => {
            alert('First element clicked');
        },
    },
    {
        icon: FcLinux,
        content: `Minim ad reprehenderit consectetur cupidatat ullamco laborum
        elit ad eu esse ad fugiat et anim.`,
    },
    {
        icon: FcFlowChart,
        content: `Minim ad reprehenderit consectetur cupidatat ullamco laborum
        elit ad eu esse ad fugiat et anim.`,
    },
    {
        icon: FcFolder,
        content: `Minim ad reprehenderit consectetur cupidatat ullamco laborum
        elit ad eu esse ad fugiat et anim.`,
        clicked: () => {
            alert('Fourth element clicked');
        },
    },
    {
        icon: FcHighBattery,
        content: `Minim ad reprehenderit consectetur cupidatat ullamco laborum
        elit ad eu esse ad fugiat et anim.`,
    },
];

export default {
    title: 'Designs/Atoms/Stlyled List',
    component: StyledList,
    argTypes: {
        title: {
            defaultValue: 'List title',
            description: 'Define top title for the List',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        className: {
            defaultValue: 'styled-list',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'styled-list' },
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
} as ComponentMeta<typeof StyledList>;

export const Default: ComponentStory<typeof StyledList> = (args) => (
    <StyledList {...args}>
        <StyledListItem
            icon={FcLandscape}
            clicked={() => {
                alert('First element clicked');
            }}
        >
            <p>
                Minim ad reprehenderit consectetur cupidatat ullamco laborum
                elit ad eu esse ad fugiat et anim.
            </p>
        </StyledListItem>

        <StyledListItem>
            <p>
                Minim ad reprehenderit consectetur cupidatat ullamco laborum
                elit ad eu esse ad fugiat et anim.
            </p>
        </StyledListItem>

        <StyledListItem
            icon={FcFlowChart}
            clicked={() => {
                alert('Last element clicked');
            }}
        >
            <p>
                Minim ad reprehenderit consectetur cupidatat ullamco laborum
                elit ad eu esse ad fugiat et anim.
            </p>
        </StyledListItem>
    </StyledList>
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
};

export const StyledListWithDataProp: ComponentStory<typeof StyledList> = (
    args
) => <StyledList {...args} />;

StyledListWithDataProp.args = {
    title: 'StyledList with data coming from data prop',
};
