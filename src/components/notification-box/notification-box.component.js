import React, { useEffect } from 'react';
import './notification-box.scss';
import Button from '../buttons/button.component';

const NotificationBox = props => {
    const { alertType, isOpen, title, message, ok, cancel, notificationClass, handleClose } = props;

    useEffect(() => {
        let handler;
        if (!ok && !cancel) {
            handler = setTimeout(() => {
                handleClose();
            }, 5000);
        }
        return () => {
            clearTimeout(handler);
        };
    }, [isOpen]);

    return (
        <div className={`notification-box ${notificationClass ? notificationClass : ''} ${isOpen ? 'open' : ''}`}>
            <div className="notification-body">
                {alertType === 'success' && (
                    <div className={`svg-icon-success ${isOpen ? 'is-animated' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.27 90.27">
                            <circle className="circle" cx="45.14" cy="45.14" r="45.14" />
                            <polyline className="circle-check" points="63.4 28.8 37.93 63.47 24.87 50.52" />
                        </svg>
                    </div>
                )}

                {alertType === 'fail' && (
                    <div className={`svg-icon-error ${isOpen ? 'is-animated' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.27 90.27">
                            <circle className="circle-2" cx="45.14" cy="45.14" r="45.14" />
                            <g className="x">
                                <rect
                                    className="x-single"
                                    x="21.77"
                                    y="43.49"
                                    width="46.74"
                                    height="3.36"
                                    transform="translate(-18.72 45.15) rotate(-45)"
                                />
                                <rect
                                    className="x-single"
                                    x="43.47"
                                    y="21.81"
                                    width="3.36"
                                    height="46.74"
                                    transform="translate(-18.72 45.16) rotate(-45)"
                                />
                            </g>
                        </svg>
                    </div>
                )}
                <span className="title">{title}</span>
                <div className="content">
                    {message && (
                        <div className="message">
                            <p>{message}</p>
                        </div>
                    )}
                </div>
                <div className="actions">
                    {ok && <Button class="ok" title={ok} clicked={() => {}} />}

                    {cancel && (
                        <Button
                            class="cancel"
                            title={cancel}
                            clicked={() => {
                                handleClose();
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotificationBox;
