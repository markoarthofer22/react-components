import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Popup from '../../components/popup/popup.component';
import Button from '../../components/buttons/button.component';

interface DialogProps {
    title: string;
    message?: string;
    requestMessage?: string;
    isShowing: boolean;
    customClass?: string;
    okCallback: (e?: any) => void;
    cancelCallback: (e?: any) => void;
}

const Dialog: React.FC<DialogProps> = ({
    title,
    message,
    requestMessage,
    isShowing,
    okCallback,
    cancelCallback,
    customClass,
}): JSX.Element => (
    <CSSTransition
        in={isShowing}
        timeout={400}
        classNames='popup'
        unmountOnExit
    >
        <Popup
            closePopup={(e?: any) =>
                cancelCallback ? cancelCallback(e) : okCallback(e)
            }
        >
            <div className={`dialog ${customClass || ''}`}>
                <h1 className='dialog--title'>{title}</h1>
                {message && <p className='dialog--message'>{message}</p>}
                {requestMessage && (
                    <textarea className='dialog--request-message'></textarea>
                )}
                {okCallback && (
                    <Button
                        customClass='dialog--confirm'
                        title='Ok'
                        clicked={okCallback}
                    />
                )}
                {cancelCallback && (
                    <Button
                        customClass='dialog--cancel'
                        title='Cancel'
                        clicked={cancelCallback}
                    />
                )}
            </div>
        </Popup>
    </CSSTransition>
);

export default Dialog;
