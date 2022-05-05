/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useTheme } from '@emotion/react';
import { VscChromeClose } from 'react-icons/vsc';
import { motion, AnimatePresence } from 'framer-motion';
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

    const dropIn = {
        hidden: {
            y: '-100vh',
            opacity: 0,
        },
        active: {
            y: '0',
            opacity: 1,
            transition: {
                duration: 0.1,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            },
        },
        exit: {
            y: '-100vh',
            opacity: 0,
        },
    };

    React.useEffect(() => {
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
        <AnimatePresence initial={false} exitBeforeEnter>
            {visible && (
                <div css={ModalStyles(theme)}>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`${className}--wrapper ${
                            visible ? `${className}--wrapper-active` : ''
                        }`}
                    >
                        <motion.div
                            variants={dropIn}
                            initial='hidden'
                            animate='active'
                            exit='exit'
                            className={`${className}--content`}
                        >
                            <div className={`${className}--header`}>
                                {title && (
                                    <h2
                                        className={`${className}--header--title`}
                                    >
                                        {title}
                                    </h2>
                                )}
                                <CloseIcon onClick={() => onModalClose()} />
                            </div>
                            <div className={`${className}--children`}>
                                {children}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
