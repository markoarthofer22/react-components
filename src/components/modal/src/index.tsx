/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { VscChromeClose } from 'react-icons/vsc';
import { ModalStyles } from './styles';

export interface IModalProps {
    visible: boolean;
    children: React.ReactNode;
    className?: string;
    title?: string;
    icon?: React.ElementType | React.ComponentType;
    onModalClose: (returnedData?: any) => void;
}

export const Modal: React.FC<IModalProps> = ({
    visible = false,
    children,
    title,
    className = 'modal',
    icon,
    onModalClose,
}): JSX.Element => {
    const theme = useTheme();

    const CloseIcon = icon || VscChromeClose;

    useEffect(() => {
        const closeOnEsc = (e?: any) => {
            e.stopPropagation();
            e.preventDefault();

            if (e.key === 'Escape') {
                onModalClose();
            }
        };

        document.addEventListener('keyup', closeOnEsc);
        return () => {
            document.removeEventListener('keyup', closeOnEsc);
        };
    }, []);

    return (
        <div css={ModalStyles(theme)}>
            <div
                className={`${className}--wrapper ${
                    visible ? `${className}--wrapper-active` : ''
                }`}
            >
                <div className={`${className}--content`}>
                    <div className={`${className}--header`}>
                        {title && (
                            <h2 className={`${className}--header--title`}>
                                {title}
                            </h2>
                        )}
                        <CloseIcon onClick={() => onModalClose()} />
                    </div>
                    <div className={`${className}--children`}>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
