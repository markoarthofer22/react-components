import React, { useEffect } from 'react';

import Button from '../../components/buttons/button.component';

interface NotificationBoxProp {
    alertType: 'success' | 'fail';
    isShowing: boolean;
    title: string;
    customClass?: string;
    message: string;
    okCallback?: (e?: any) => void;
    cancelCallback?: (e?: any) => void;
    handleClose: (e?: any) => void;
}

const NotificationBox: React.FC<NotificationBoxProp> = (props): JSX.Element => {
    const {
        alertType,
        isShowing,
        title,
        message,
        okCallback,
        cancelCallback,
        customClass,
        handleClose,
    } = props;

    useEffect(() => {
        let handler: ReturnType<typeof setTimeout>;
        if (!okCallback && !cancelCallback) {
            handler = setTimeout(() => {
                handleClose();
            }, 5000);
        }
        return () => {
            clearTimeout(handler);
        };
    }, [isShowing]);

    return (
        <div
            className={`notification-box ${customClass || ''} ${
                isShowing ? 'open' : ''
            }`}
        >
            <div className='notification-body'>
                {alertType === 'success' && (
                    <div
                        className={`svg-icon-success ${
                            isShowing ? 'is-animated' : ''
                        }`}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 90.27 90.27'
                        >
                            <circle
                                className='circle'
                                cx='45.14'
                                cy='45.14'
                                r='45.14'
                            />
                            <polyline
                                className='circle-check'
                                points='63.4 28.8 37.93 63.47 24.87 50.52'
                            />
                        </svg>
                    </div>
                )}

                {alertType === 'fail' && (
                    <div
                        className={`svg-icon-error ${
                            isShowing ? 'is-animated' : ''
                        }`}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 90.27 90.27'
                        >
                            <circle
                                className='circle-2'
                                cx='45.14'
                                cy='45.14'
                                r='45.14'
                            />
                            <g className='x'>
                                <rect
                                    className='x-single'
                                    x='21.77'
                                    y='43.49'
                                    width='46.74'
                                    height='3.36'
                                    transform='translate(-18.72 45.15) rotate(-45)'
                                />
                                <rect
                                    className='x-single'
                                    x='43.47'
                                    y='21.81'
                                    width='3.36'
                                    height='46.74'
                                    transform='translate(-18.72 45.16) rotate(-45)'
                                />
                            </g>
                        </svg>
                    </div>
                )}
                <span className='title'>{title}</span>
                <div className='content'>
                    {message && (
                        <div className='message'>
                            <p>{message}</p>
                        </div>
                    )}
                </div>
                <div className='actions'>
                    {okCallback && (
                        <Button
                            customClass='pink'
                            title='Ok'
                            clicked={okCallback}
                        />
                    )}

                    {cancelCallback && (
                        <Button
                            customClass='pink'
                            title='Cancel'
                            clicked={handleClose}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotificationBox;
