import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { VscCheck, VscChromeClose } from 'react-icons/vsc';
import { SwitchButton } from '../src/index';

import PageDoc from './development.mdx';

export default {
    title: 'Designs/Atoms/Switch Button',
    component: SwitchButton,
    argTypes: {
        name: {
            defaultValue: 'current-select',
            type: {
                name: 'string',
                required: true,
            },
            description: 'Define unique id to your SwitchButton',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        icon: {
            table: {
                disable: true,
            },
        },
        checked: {
            table: {
                disable: true,
            },
        },
        id: {
            defaultValue: 'current-select',
            description: 'Define unique name to your SwitchButton',
            control: {
                type: 'text',
            },
            type: {
                name: 'string',
                required: true,
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        small: {
            defaultValue: false,
            control: {
                type: 'boolean',
            },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
        disabled: {
            defaultValue: false,
            control: {
                type: 'boolean',
            },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
        className: {
            defaultValue: 'toggle-switch',
            description: 'Add any custom className to your SwitchButton',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'toggle-switch' },
            },
        },
        optionLabels: {
            defaultValue: {
                yes: 'yes',
                no: 'no',
            },
            description: 'Add custom Yes/No values to the component',
            control: {
                type: 'object',
            },
            table: {
                type: { summary: '{yes: string;no: string;}' },
                defaultValue: { summary: '{yes: "yes", no: "no"}' },
            },
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof SwitchButton>;

const font = {
    fontSize: 16,
    margin: '10px 0',
};

export const Default: ComponentStory<typeof SwitchButton> = (args) => {
    const [isChecked, setIsChecked] = React.useState(false);

    return (
        <>
            <div>
                <p style={font}>Switch button</p>
                <SwitchButton
                    {...args}
                    onChange={(checked) => setIsChecked(checked)}
                    checked={isChecked}
                />
            </div>

            <p style={font}>
                Current state of Switch:{' '}
                <strong style={{ color: '#1693c5' }}>
                    {isChecked ? 'checked' : 'not checked'}
                </strong>
            </p>
        </>
    );
};

export const WithIcon: ComponentStory<typeof SwitchButton> = () => {
    const [isChecked, setIsChecked] = React.useState(false);

    return (
        <>
            <div>
                <p style={font}>Switch button with label icons</p>
                <SwitchButton
                    id='current-select-with-icon'
                    name='current-select-with-icon'
                    checked={isChecked}
                    onChange={(checked) => setIsChecked(checked)}
                    icon={{
                        yes: <VscCheck />,
                        no: <VscChromeClose />,
                    }}
                />
            </div>

            <p style={font}>
                Current state of Switch:{' '}
                <strong style={{ color: '#1693c5' }}>
                    {isChecked ? 'checked' : 'not checked'}
                </strong>
            </p>
        </>
    );
};

WithIcon.parameters = { controls: { disable: true } };
