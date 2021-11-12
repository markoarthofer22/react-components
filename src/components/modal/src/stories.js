import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { RiCloseCircleLine } from 'react-icons/ri';
import Modal from './';

import Button from '../../buttons/src/';

storiesOf(`Designs/Atoms`, module)
    .addDecorator(withKnobs)
    .add('Modal', () => {
        const [modalState, setModalState] = React.useState(true);

        return (
            <Modal
                onModalClose={() => setModalState(false)}
                title='New Modal?'
                visible={modalState}
            >
                <div className='modal--children--header'>
                    <p>This is some modal text</p>
                </div>
                <div className='modal--children--cta'>
                    <Button
                        title='Yes'
                        className='blue big mr-10'
                        clicked={() => console.log('Yes')}
                    />
                    <Button
                        title='No'
                        className='default big'
                        clicked={() => console.log('No')}
                    />
                </div>
            </Modal>
        );
    });
