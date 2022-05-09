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
    isDraggable?: boolean;
    onModalClose: (returnedData?: any) => void;
    animationType?: 'flip' | 'dropIn';
}

export const Modal: React.FC<IModalProps> = ({
    visible = false,
    children,
    title,
    className = 'modal',
    icon,
    isDraggable = false,
    onModalClose,
    animationType = 'dropIn',
}): JSX.Element => {
    const theme = useTheme();

    const containerMotionRef = React.useRef(null);

    const CloseIcon = icon || VscChromeClose;

    const animation = {
        flip: {
            hidden: { rotateY: 180 },
            active: {
                rotateY: 0,
                transition: {
                    duration: 1,
                },
            },
            exit: {
                rotateY: 180,
                transition: {
                    duration: 1,
                },
            },
        },

        dropIn: {
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

    const renderChildren = () => (
        <>
            <div className={`${className}--header`}>
                {title && (
                    <h2 className={`${className}--header--title`}>{title}</h2>
                )}
                <CloseIcon onClick={() => onModalClose()} />
            </div>
            <div className={`${className}--children`}>{children}</div>
        </>
    );

    return (
        <AnimatePresence initial={false} exitBeforeEnter>
            {visible && (
                <div css={ModalStyles(theme)}>
                    <motion.div
                        ref={containerMotionRef}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`${className}--wrapper`}
                    >
                        {isDraggable ? (
                            <motion.div
                                drag
                                dragConstraints={containerMotionRef}
                                dragTransition={{
                                    bounceStiffness: 600,
                                    bounceDamping: 20,
                                }}
                                dragElastic={0.5}
                                whileTap={{ cursor: 'grabbing' }}
                                whileDrag={{ scale: 0.875 }}
                                className={`${className}--content`}
                            >
                                {renderChildren()}
                            </motion.div>
                        ) : (
                            <motion.div
                                className={`${className}--content`}
                                variants={animation[animationType]}
                                initial='hidden'
                                animate='active'
                                exit='exit'
                            >
                                {renderChildren()}
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
