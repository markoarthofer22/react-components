import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MasonryLayout } from '../src/index';
import PageDoc from './development.mdx';

export default {
    title: 'Designs/Atoms/Masonary Layout',
    component: MasonryLayout,
    argTypes: {
        className: {
            defaultValue: 'masonry',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'alert' },
            },
            description: 'Specify custom className for override',
        },
        columns: {
            defaultValue: 3,
            control: {
                type: 'number',
            },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 3 },
            },
            description: 'Number of columns for masonry layout',
        },
        gap: {
            defaultValue: 20,
            control: {
                type: 'number',
            },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 20 },
            },
            description: 'Gap between elements',
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof MasonryLayout>;

export const Default: ComponentStory<typeof MasonryLayout> = (args) => {
    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#efefef',
    };
    return (
        <MasonryLayout {...args}>
            {[...Array(12).keys()].map((key, i) => {
                const height = 200 + Math.ceil(Math.random() * 300);

                return (
                    <div
                        key={i}
                        style={{
                            height: `${height}px`,
                            ...styles,
                        }}
                    >
                        {key}
                    </div>
                );
            })}
        </MasonryLayout>
    );
};
