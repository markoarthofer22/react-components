import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { Popup } from '../src/index';
import { Button } from '../../buttons/src/index';
import PageDoc from './development.mdx';

const style = {
    fontSize: '14px',
    display: 'flex' as const,
    alignItems: 'center' as const,
    flexDirection: 'column' as const,
    textAlign: 'center' as const,
};

export default {
    title: 'Designs/Atoms/Popup',
    component: Popup,
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof Popup>;

export const Default: ComponentStory<typeof Popup> = () => {
    const [popupState, setPopupState] = React.useState(false);

    return (
        <>
            <Button
                title='Show Popup'
                className='default blue'
                clicked={() => {
                    setPopupState(!popupState);
                }}
            />

            <Popup
                visible={popupState}
                icon={RiCloseCircleLine}
                // eslint-disable-next-line no-alert
                closePopup={() => setPopupState(false)}
            >
                <div style={style}>
                    <h3>This is popup with some text</h3>
                    <h4>Some H4 tag</h4>
                </div>
            </Popup>
        </>
    );
};
