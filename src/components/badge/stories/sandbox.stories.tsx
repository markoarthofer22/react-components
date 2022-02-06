import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AiOutlineQuestion } from 'react-icons/ai';
import { Badge } from '../src';
import PageDoc from './development.mdx';

const style = {
    width: 200,
    height: 200,
    borderRadius: '100%',
    position: 'relative' as const,
    marginTop: 80,
};

const img = {
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
};

export default {
    title: 'Designs/Atoms/Badge',
    component: Badge,
    argTypes: {
        value: {
            defaultValue: '90',
            type: {
                name: 'symbol',
                required: true,
            },
            control: {
                type: null,
            },
            table: {
                type: {
                    summary:
                        'string | number | React.ElementType | React.ComponentType | React.ReactNode',
                },
                defaultValue: { summary: '' },
            },
            description: 'Declare value for the Badge',
        },
        className: {
            defaultValue: 'badge',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'badge' },
            },
            description: 'Add any custom className to your button',
        },
        stylesObj: {
            defaultValue: undefined,
            control: {
                type: 'object',
            },
            table: {
                type: { summary: '{[key: string]: any}' },
                defaultValue: { summary: '{}' },
            },
            description: 'Apply custom stylings',
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof Badge>;

export const Default: ComponentStory<typeof Badge> = (args) => (
    <div style={{ position: 'relative' }}>
        <div style={style}>
            <img
                style={img}
                src='https://picsum.photos/id/237/400/400'
                alt='Some radnom'
            />
            <Badge {...args} />
        </div>
    </div>
);

export const WithCustomStyles: ComponentStory<typeof Badge> = (args) => (
    <div style={{ position: 'relative' }}>
        <div style={style}>
            <img
                style={img}
                src='https://picsum.photos/id/237/400/400'
                alt='Some radnom'
            />
            <Badge
                {...args}
                value='90'
                stylesObj={{ backgroundColor: 'blue', color: 'pink' }}
            />
        </div>
    </div>
);

export const WithCustomIcon: ComponentStory<typeof Badge> = (args) => (
    <div style={{ position: 'relative' }}>
        <div style={style}>
            <img
                style={img}
                src='https://picsum.photos/id/237/400/400'
                alt='Some radnom'
            />
            <Badge
                {...args}
                value={<AiOutlineQuestion />}
                stylesObj={{ width: 30, height: 30 }}
            />
        </div>
    </div>
);
