import React, { useEffect } from 'react';

// styles
import './styles.scss';

// components
// import SvgIcon from '../svg-icon/svg-icon.component';

interface PopupProps {
    closePopup: (e?: any) => void;
    children: React.ReactNode;
    customClass?: string;
}

const Popup: React.FC<PopupProps> = (props): JSX.Element => {
    const { closePopup, children, customClass } = props;

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
                        className='close-button close'
                        aria-label='close'
                        onClick={(e?: any) => closePopup(e)}
                    >
                        {/* <SvgIcon icon='close' /> */}x
                    </button>
                )}
                {children}
            </div>
        </div>
    );
};

export default Popup;
