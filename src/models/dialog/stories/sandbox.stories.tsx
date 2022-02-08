import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../../../components/buttons/src/index';
import { Dialog } from '../src/index';
import PageDoc from './development.mdx';

export default {
    title: 'Designs/Models/Dialog',
    component: Dialog,
    argTypes: {
        isShowing: {
            defaultValue: false,
            description: 'Show or hide Dialog',
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
            defaultValue: 'dialog',
            description: 'Add any custom className to your Dialog',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'dialog' },
            },
        },
        title: {
            defaultValue: 'Click me if you want',
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
        message: {
            defaultValue: 'This is text message',
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
} as ComponentMeta<typeof Dialog>;

export const Default: ComponentStory<typeof Dialog> = (args) => {
    // eslint-disable-next-line react/destructuring-assignment
    const [modalState, setModalState] = React.useState(args.isShowing);

    return (
        <>
            <Button
                title='Show Dialog'
                className='default blue'
                clicked={() => {
                    setModalState(!modalState);
                }}
            />

            <Dialog
                {...args}
                isShowing={modalState}
                // eslint-disable-next-line no-alert
                okCallback={() => alert('clicked ok')}
                cancelCallback={() => setModalState(false)}
            />
        </>
    );
};
