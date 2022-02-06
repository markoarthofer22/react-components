import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AiOutlineQuestion } from 'react-icons/ai';
import { Tooltip } from '../src/index';

import PageDoc from './development.mdx';

export default {
    title: 'Designs/Atoms/Tooltip',
    component: Tooltip,
    argTypes: {
        title: {
            defaultValue:
                'Nisi est qui incididunt laborum sit ea deserunt et culpa cillum.',
            type: {
                name: 'string',
                required: true,
            },
            description: 'Add title that shows onHover',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'tooltip' },
            },
        },
        className: {
            defaultValue: 'tooltip',
            description: 'Add any custom className to your Tooltip',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'tooltip' },
            },
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof Tooltip>;

const style = {
    fontSize: '14px',
    display: 'flex' as const,
    alignItems: 'center' as const,
    position: 'relative' as const,
    marginTop: '80px',
};

export const Default: ComponentStory<typeof Tooltip> = (args) => (
    <div>
        <p style={style}>
            This is custom text that has tooltip
            <Tooltip {...args} icon={AiOutlineQuestion} />
        </p>
    </div>
);
