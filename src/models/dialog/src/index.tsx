/** @jsxImportSource @emotion/react */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useTheme } from '@emotion/react';
import { Button } from '../../../components/buttons/src/index';
import { Popup } from '../../../components/popup/src/index';

import { DialogStyles } from './styles';

export interface IDialogProps {
    title: string;
    message?: string;
    requestMessage?: string;
    isShowing: boolean;
    className?: string;
    okCallback: (e?: any) => void;
    cancelCallback: (e?: any) => void;
}

export const Dialog: React.FC<IDialogProps> = ({
    title,
    message,
    requestMessage,
    isShowing,
    okCallback,
    cancelCallback,
    className = 'dialog',
}): JSX.Element => {
    const theme = useTheme();

    return (
        <CSSTransition
            in={isShowing}
            timeout={400}
            classNames='popup'
            unmountOnExit
        >
            <Popup
                visible={isShowing}
                closePopup={(e?: any) =>
                    cancelCallback ? cancelCallback(e) : okCallback(e)
                }
            >
                <div css={DialogStyles(theme)} className={`${className}`}>
                    <h1 className={`${className}--title`}>{title}</h1>
                    {message && (
                        <p className={`${className}--message`}>{message}</p>
                    )}
                    {requestMessage && (
                        <textarea className={`${className}--request-message`} />
                    )}
                    {okCallback && (
                        <Button
                            className={`${className}--confirm`}
                            title='Ok'
                            clicked={okCallback}
                        />
                    )}
                    {cancelCallback && (
                        <Button
                            className={`${className}--cancel`}
                            title='Cancel'
                            clicked={cancelCallback}
                        />
                    )}
                </div>
            </Popup>
        </CSSTransition>
    );
};

export default Dialog;
