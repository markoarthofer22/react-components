/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { PopupStyles } from './styles';

interface PopupProps {
    closePopup: (e?: any) => void;
    children: React.ReactNode;
    customClass?: string;
    icon?: React.ElementType | React.ComponentType;
}

const Popup: React.FC<PopupProps> = ({
    closePopup,
    children,
    customClass,
    icon,
}): JSX.Element => {
    const theme = useTheme();

    const C = icon || MdClose;

    useEffect(() => {
        const closeOnEsc = (e?: any) => {
            e.stopPropagation();
            if (e.keyCode === 27) {
                closePopup();
            }
        };

        document.addEventListener('keydown', closeOnEsc);
        return () => {
            document.removeEventListener('keydown', closeOnEsc);
        };
    }, [closePopup]);

    useEffect(() => {
        document.querySelector('body')!.classList.add('no-scroll');

        return () => {
            document.querySelector('body')!.classList.remove('no-scroll');
        };
    }, []);

    return (
        <span css={PopupStyles(theme)}>
            <div id='popup' className={`popup ${customClass || ''}`}>
                <div className='window'>
                    {closePopup && (
                        <button
                            type='button'
                            className='close-button close'
                            aria-label='close'
                            onClick={(e?: any) => closePopup(e)}
                        >
                            <C />
                        </button>
                    )}
                    {children}
                </div>
            </div>
        </span>
    );
};

export default Popup;
