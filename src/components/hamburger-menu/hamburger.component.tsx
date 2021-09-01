import React, { useState, useEffect } from 'react';

interface HamburgerProps {
    customClass?: string;
    isOpen: boolean;
    onChange?: (e?: any) => void;
    disableOnDesktop?: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({
    isOpen,
    onChange,
    customClass,
    disableOnDesktop = true,
}): JSX.Element => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(isOpen);

    useEffect(() => {
        if (!onChange) return;

        onChange();
    }, [isHamburgerOpen, onChange]);

    return (
        <div
            className={`hamburger ${customClass || ''} ${
                isHamburgerOpen ? 'hamburger-open' : ''
            } ${disableOnDesktop ? 'hamburger--hide-desktop' : ''}`}
            onClick={() => {
                setIsHamburgerOpen(!isHamburgerOpen);
            }}
        >
            <div className='hamburger--item'></div>
            <div className='hamburger--item'></div>
            <div className='hamburger--item'></div>
        </div>
    );
};

export default Hamburger;