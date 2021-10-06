import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

interface PopupProps {
    closePopup: (e?: any) => void;
    children: React.ReactNode;
    customClass?: string;
    icon?: React.ElementType | React.ComponentType;
}

const Popup: React.FC<PopupProps> = (props): JSX.Element => {
    const { closePopup, children, customClass, icon } = props;

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
    );
};

export default Popup;
