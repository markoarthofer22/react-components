/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useTheme } from '@emotion/react';
import { HamburgerStyles } from './styles';

export interface IHamburgerProps {
    isOpen: boolean;
    className?: string;
    onChange?: (e?: any) => void;
    disableOnDesktop?: boolean;
}

export const Hamburger: React.FC<IHamburgerProps> = ({
    isOpen,
    onChange,
    className = 'hamburger',
    disableOnDesktop = true,
}): JSX.Element => {
    const [isHamburgerOpen, setIsHamburgerOpen] =
        React.useState<boolean>(isOpen);
    const theme = useTheme();

    React.useEffect(() => {
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
