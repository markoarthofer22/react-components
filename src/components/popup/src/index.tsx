/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useTheme } from '@emotion/react';
import { MdClose } from 'react-icons/md';
import { PopupStyles } from './styles';

export interface IPopupProps {
    visible: boolean;
    closePopup: (e?: any) => void;
    children: React.ReactNode;
    className?: string;
    icon?: React.ElementType | React.ComponentType;
}

export const Popup: React.FC<IPopupProps> = ({
    visible = false,
    closePopup,
    children,
    className = 'popup',
    icon,
}): JSX.Element => {
    const theme = useTheme();

    const C = icon || MdClose;

    React.useEffect(() => {
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

    React.useEffect(() => {
        document.querySelector('body')!.classList.add('no-scroll');

        return () => {
            document.querySelector('body')!.classList.remove('no-scroll');
        };
    }, []);

    return visible ? (
        <span css={PopupStyles(theme)}>
            <div id='popup' className={`${className}`}>
                <div className={`${className}--window`}>
                    {closePopup && (
                        <button
                            type='button'
                            className={`${className}--close`}
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
    ) : (
        <div />
    );
};

export default Popup;
