import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { uniqueId } from 'underscore';
import { Breadcrumbs } from '../src';
import PageDoc from './development.mdx';

const crumbsWithoutHome = [
    {
        id: uniqueId('breadcrumbs_'),
        title: 'Link one',
        link: '/link-one',
    },
    {
        id: uniqueId('breadcrumbs_'),
        title: 'Last destination',
        link: '/last-destination',
    },
];

const crubsWithHome = [
    {
        id: uniqueId('breadcrumbs_'),
        title: 'Home',
        link: '/custom-link-to-home',
    },
    {
        id: uniqueId('breadcrumbs_'),
        title: 'Link one',
        link: '/link-one',
    },
    {
        id: uniqueId('breadcrumbs_'),
        title: 'Last destination',
        link: '/last-destination',
    },
];

export default {
    title: 'Designs/Atoms/Breadcrumbs',
    component: Breadcrumbs,
    argTypes: {
        hasHomeIcon: {
            defaultValue: true,
            control: {
                type: 'boolean',
            },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: true },
            },
            description: 'Show or hide Home icon',
        },
        isHomeRoot: {
            defaultValue: true,
            control: {
                type: 'boolean',
            },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: true },
            },
            description: 'Set breadcrumbs to root level',
        },
        className: {
            defaultValue: 'breadcrumbs',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'badge' },
            },
            description: 'Add any custom className to your button',
        },
        crumbs: {
            defaultValue: crumbsWithoutHome,
            control: {
                type: 'object',
            },
            description: 'Define your crumbs',
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof Breadcrumbs>;

export const BreadcrumbsWithHomeRootAndDefaultIcon: ComponentStory<
    typeof Breadcrumbs
> = (args) => <Breadcrumbs {...args} crumbs={crumbsWithoutHome} />;

export const BreadcrumbsWithHomeRootAndCustomIcon: ComponentStory<
    typeof Breadcrumbs
> = (args) => <Breadcrumbs {...args} homeIcon={RiCloseCircleLine} />;

export const BreadcrumbsWithoutHomeRootAndCustomIcon: ComponentStory<
    typeof Breadcrumbs
> = (args) => (
    <Breadcrumbs
        {...args}
        homeIcon={RiCloseCircleLine}
        isHomeRoot={false}
        crumbs={crubsWithHome}
    />
);

export const BreadcrumbsWithoutIcon: ComponentStory<typeof Breadcrumbs> = (
    args
) => <Breadcrumbs {...args} hasHomeIcon={false} />;
