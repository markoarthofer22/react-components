import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

// icons
import { FaHome, FaLock, FaMoneyBill, FaUser } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { BiAnalyse, BiCog } from 'react-icons/bi';
import { AiFillHeart, AiTwotoneFileExclamation } from 'react-icons/ai';
import { BsCartCheck } from 'react-icons/bs';

// rest
import { SideNav, TSideNavRoutes } from '../src/index';
import PageDoc from './development.mdx';

const routes: TSideNavRoutes[] = [
    {
        path: '/',
        name: 'Dashboard',
        icon: FaHome,
    },
    {
        path: '/users',
        name: 'Users',
        icon: FaUser,
    },
    {
        path: '/messages',
        name: 'Messages',
        icon: MdMessage,
    },
    {
        path: '/analytics',
        name: 'Analytics',
        icon: BiAnalyse,
    },
    {
        path: '/file-manager',
        name: 'File Manager',
        icon: AiTwotoneFileExclamation,
        children: [
            {
                path: '/settings/profile',
                name: 'Profile ',
                icon: FaUser,
            },
            {
                path: '/settings/2fa',
                name: '2FA',
                icon: FaLock,
            },
            {
                path: '/settings/billing',
                name: 'Billing',
                icon: FaMoneyBill,
            },
        ],
    },
    {
        path: '/order',
        name: 'Order',
        icon: BsCartCheck,
    },
    {
        path: '/settings',
        name: 'Settings',
        icon: BiCog,
        exact: true,
        children: [
            {
                path: '/settings/profile',
                name: 'Profile ',
                icon: FaUser,
            },
            {
                path: '/settings/2fa',
                name: '2FA',
                icon: FaLock,
            },
            {
                path: '/settings/billing',
                name: 'Billing',
                icon: FaMoneyBill,
            },
        ],
    },
    {
        path: '/saved',
        name: 'Saved',
        icon: AiFillHeart,
    },
];

export default {
    title: 'Designs/Models/Side Navigation',
    component: SideNav,
    argTypes: {
        isOpen: {
            defaultValue: false,
            description: 'Open or close your nav',
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
            defaultValue: 'side-nav',
            description: 'Add any custom className to your Side Nav',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'side-nav' },
            },
        },
        title: {
            defaultValue: 'Sidetitle',
            type: {
                name: 'string',
                required: true,
            },
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        routes: {
            defaultValue: routes,
            control: {
                type: 'object',
            },
            description: 'Define your routes',
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof SideNav>;

export const Default: ComponentStory<typeof SideNav> = (args) => (
    <div style={{ display: 'flex' }}>
        <SideNav {...args} />
    </div>
);
