/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { HamburgerStyles } from './styles';

interface IHamburgerProps {
    className?: string;
    isOpen: boolean;
    onChange?: (e?: any) => void;
    disableOnDesktop?: boolean;
}

const Hamburger: React.FC<IHamburgerProps> = ({
    isOpen,
    onChange,
    className = 'hamburger',
    disableOnDesktop = true,
}): JSX.Element => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(isOpen);
    const theme = useTheme();

    useEffect(() => {
        if (!onChange) return;

        onChange();
    }, [isHamburgerOpen, onChange]);

    return (
        <div css={HamburgerStyles(theme)}>
            <div
                role='button'
                tabIndex={0}
                className={`${className}  ${
                    isHamburgerOpen ? `${className}--open` : ''
                } ${disableOnDesktop ? `${className}--hide-desktop` : ''}`}
                onClick={() => {
                    setIsHamburgerOpen(!isHamburgerOpen);
                }}
            >
                <div className={`${className}--item`} />
                <div className={`${className}--item`} />
                <div className={`${className}--item`} />
            </div>
        </div>
    );
};

export default Hamburger;
