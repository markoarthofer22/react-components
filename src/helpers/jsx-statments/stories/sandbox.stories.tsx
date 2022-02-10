import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { For, If } from '../src/index';
import PageDoc from './development.mdx';

export default {
    title: 'Designs/Helpers/JSX Statments',
    component: If,
    argTypes: {
        condition: {
            default: true,
            type: {
                name: 'boolean',
                required: true,
            },
            description: 'Set IF condition',
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof If>;

export const Default: ComponentStory<typeof If> = ({ condition }) => {
    const MappedComp = ({ items }: { items?: any }) => (
        <div>{items} Rendered</div>
    );

    return (
        <div>
            <If condition={condition} otherwise={<div>Not true</div>}>
                <div>This is true</div>
            </If>
            <div style={{ marginBottom: '50px' }} />
            <For of={['1', '2', '3']} each='items'>
                <MappedComp />
            </For>
        </div>
    );
};
