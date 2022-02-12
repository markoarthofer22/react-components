/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert } from '../src/index';
// import PageDoc from './development.mdx';

export default {
    title: 'Designs/Atoms/Alert',
    component: Alert,
    // argTypes: {
    //     variant: {
    //         defaultValue: 'circled',
    //         description: 'Select variant',
    //         table: {
    //             type: {
    //                 summary: 'circled | squared | rounded',
    //             },
    //             defaultValue: { summary: 'circled' },
    //         },
    //         control: {
    //             type: 'select',
    //             options: {
    //                 circled: 'circled',
    //                 squared: 'squared',
    //                 rounded: 'rounded',
    //             },
    //         },
    //     },
    //     className: {
    //         defaultValue: 'alert',
    //         control: {
    //             type: 'text',
    //         },
    //         table: {
    //             type: { summary: 'string' },
    //             defaultValue: { summary: 'alert' },
    //         },
    //         description: 'Specify custom className for override',
    //     },
    // },
    // parameters: {
    //     docs: {
    //         page: PageDoc,
    //     },
    // },
} as ComponentMeta<typeof Alert>;

export const Default: ComponentStory<typeof Alert> = (args) => (
    <Alert icon title='Some title' onClose={(e) => console.log('clicked')}>
        Some kind of text
    </Alert>
);
