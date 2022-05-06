import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
    RiCloseCircleLine,
    RiAttachmentLine,
    RiServiceFill,
} from 'react-icons/ri';
import { Button } from '../../buttons/src/index';
import { Modal } from '../src/index';
import PageDoc from './development.mdx';

const Icons = { RiCloseCircleLine, RiAttachmentLine, RiServiceFill };

export default {
    title: 'Designs/Atoms/Modal',
    component: Modal,
    argTypes: {
        visible: {
            defaultValue: false,
            description: 'Show or hide Modal',
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
        isDraggable: {
            defaultValue: false,
            description: 'Add dragging to your content',
            type: {
                name: 'boolean',
                required: false,
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
            defaultValue: 'modal',
            description: 'Add any custom className to your Modal',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'modal' },
            },
        },
        title: {
            defaultValue: '',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
            description: 'Specify the title for the Modal',
        },
        animationType: {
            defaultValue: 'dropIn',
            control: {
                type: 'text',
                required: false,
            },
            table: {
                type: { summary: 'flip | dropIn' },
                defaultValue: { summary: 'dropIn' },
            },
            description: 'Specify animation type',
        },
        icon: {
            options: Object.keys(Icons),
            mapping: Icons,
            description: 'Provide custom CloseIcon',
            table: {
                type: { summary: 'React.ElementType | React.ComponentType' },
                defaultValue: { summary: '' },
            },
            control: {
                type: 'select',
                labels: {
                    RiCloseCircleLine: 'Icon 1',
                    RiAttachmentLine: 'Icon 2',
                    RiServiceFill: 'Icon 3',
                },
            },
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = (args) => {
    // eslint-disable-next-line react/destructuring-assignment
    const [modalState, setModalState] = React.useState(args.visible);

    return (
        <>
            <Button
                title='Show Modal'
                className='default blue'
                clicked={() => {
                    setModalState(!modalState);
                }}
            />

            <Modal
                {...args}
                onModalClose={() => setModalState(false)}
                visible={modalState}
            >
                <div className='modal--children--header'>
                    <p>This is some modal text</p>
                </div>
                <div className='modal--children--cta'>
                    <Button
                        title='Yes'
                        className='blue big mr-10'
                        // eslint-disable-next-line no-alert
                        clicked={() => alert('Yes pressed')}
                    />
                    <Button
                        title='No'
                        className='default big'
                        // eslint-disable-next-line no-alert
                        clicked={() => alert('No pressed')}
                    />
                </div>
            </Modal>
        </>
    );
};
