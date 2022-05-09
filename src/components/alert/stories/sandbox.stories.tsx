/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IoHeartHalfSharp } from 'react-icons/io5';
import { Alert } from '../src/index';
import { Button } from '../../buttons/src/index';
import PageDoc from './development.mdx';

export default {
    title: 'Designs/Atoms/Alert',
    component: Alert,
    argTypes: {
        type: {
            defaultValue: 'info',
            description: 'Select alert type',
            table: {
                type: {
                    summary: 'info | warning | error | success',
                },
                defaultValue: { summary: 'info' },
            },
            control: {
                type: 'select',
                options: {
                    info: 'info',
                    warning: 'warning',
                    error: 'error',
                    success: 'success',
                },
            },
        },
        variant: {
            defaultValue: 'bordered',
            description: 'Select variant',
            table: {
                type: {
                    summary: 'bordered | filled',
                },
                defaultValue: { summary: 'bordered' },
            },
            control: {
                type: 'select',
                options: {
                    bordered: 'bordered',
                    filled: 'filled',
                },
            },
        },
        className: {
            defaultValue: 'alert',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'alert' },
            },
            description: 'Specify custom className for override',
        },
        closeAfterMs: {
            defaultValue: 5000,
            control: {
                type: 'number',
            },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 5000 },
            },
            description: 'Specify timeout value for autoclose',
        },
        title: {
            defaultValue: 'Some title',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        backgroundColor: {
            defaultValue: undefined,
            control: {
                type: 'color',
            },
            table: {
                type: { summary: 'string | transparent' },
                defaultValue: { summary: undefined },
            },
            description: 'Override background color for the alert',
        },
        show: {
            defaultValue: false,
            type: {
                name: 'boolean',
                required: true,
            },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof Alert>;

export const Default: ComponentStory<typeof Alert> = (args) => {
    const [openAlert, setOpenAlert] = React.useState<boolean>(args.show);

    return (
        <>
            <Button
                className='default blue'
                title={openAlert ? 'Close Alert' : 'Open Alert'}
                clicked={() => setOpenAlert(!openAlert)}
            />
            <Alert
                {...args}
                icon
                show={openAlert}
                returnShowValue={() => setOpenAlert(false)}
            >
                Some kind of text
            </Alert>
        </>
    );
};

export const Secondary: ComponentStory<typeof Alert> = (args) => {
    const [openAlert, setOpenAlert] = React.useState<boolean>(args.show);

    return (
        <>
            <Button
                className='default blue'
                title={openAlert ? 'Close Alert' : 'Open Alert'}
                clicked={() => setOpenAlert(!openAlert)}
            />

            <Alert
                {...args}
                icon
                onClose={() => setOpenAlert(false)}
                show={openAlert}
            >
                Some kind of text
            </Alert>
        </>
    );
};

Secondary.storyName = 'Alert with onClose callback';

export const Tertiary: ComponentStory<typeof Alert> = (args) => {
    const [openAlert, setOpenAlert] = React.useState<boolean>(args.show);

    return (
        <>
            <Button
                className='default blue'
                title={openAlert ? 'Close Alert' : 'Open Alert'}
                clicked={() => setOpenAlert(!openAlert)}
            />

            <Alert
                {...args}
                icon={IoHeartHalfSharp}
                onClose={() => setOpenAlert(false)}
                show={openAlert}
                returnShowValue={() => setOpenAlert(false)}
            >
                Some kind of text
            </Alert>
        </>
    );
};

Tertiary.storyName = 'Alert with custom icon';
