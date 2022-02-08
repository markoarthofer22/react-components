import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationBox } from '../src/index';
import PageDoc from './development.mdx';
import { Button } from '../../../components/buttons/src/index';

// alertType: 'success' | 'fail';

export default {
    title: 'Designs/Models/Notification Box',
    component: NotificationBox,
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
            defaultValue: 'notification-box',
            description: 'Add any custom className to your NotificationBox',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'notification-box' },
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
        alertType: {
            defaultValue: 'success',
            description: 'Select Box type',
            control: {
                type: 'select',
                options: {
                    Success: 'success',
                    Fail: 'fail',
                },
            },
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'fail | success' },
            },
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof NotificationBox>;

export const Default: ComponentStory<typeof NotificationBox> = (args) => {
    // eslint-disable-next-line react/destructuring-assignment
    const [modalState, setModalState] = React.useState(args.isShowing);

    return (
        <>
            <Button
                title='Show NotificationBox'
                className='default blue'
                clicked={() => {
                    setModalState(!modalState);
                }}
            />

            <NotificationBox
                {...args}
                isShowing={modalState}
                // eslint-disable-next-line no-alert
                okCallback={() => alert('clicked ok')}
                cancelCallback={() => setModalState(false)}
            />
        </>
    );
};
