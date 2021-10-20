/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { HamburgerStyles } from './styles';

interface IHamburgerProps {
    customClass?: string;
    isOpen: boolean;
    onChange?: (e?: any) => void;
    disableOnDesktop?: boolean;
}

const Hamburger: React.FC<IHamburgerProps> = ({
    isOpen,
    onChange,
    customClass,
    disableOnDesktop = true,
}): JSX.Element => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(isOpen);
    const theme = useTheme();

    useEffect(() => {
        if (!onChange) return;

        onChange();
    }, [isHamburgerOpen, onChange]);

    return (
        <span css={HamburgerStyles(theme)}>
            <div
                role='button'
                tabIndex={0}
                className={`hamburger ${customClass || ''} ${
                    isHamburgerOpen ? 'hamburger--open' : ''
                } ${disableOnDesktop ? 'hamburger--hide-desktop' : ''}`}
                onClick={() => {
                    setIsHamburgerOpen(!isHamburgerOpen);
                }}
            >
                <div className='hamburger--item' />
                <div className='hamburger--item' />
                <div className='hamburger--item' />
            </div>
        </span>
    );
};

export default Hamburger;
