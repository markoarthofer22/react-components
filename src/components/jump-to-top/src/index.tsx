/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { MdTrendingUp } from 'react-icons/md';
import { useTheme } from '@emotion/react';
import { JumpToTopStyles } from './styles';

export interface IJumpToTopProps {
    icon?: React.ElementType | React.ComponentType;
    title?: string;
    targetElement?: string;
    visibleFrom: number;
    animationDuration?: number;
    className?: string;
}

export const JumpToTop: React.FC<IJumpToTopProps> = ({
    icon,
    title,
    targetElement,
    animationDuration = 400,
    className = 'jump-to-top',
    visibleFrom,
}) => {
    const theme = useTheme();
    const Icon = icon || MdTrendingUp;

    const [isScrollVisible, setIsScrollVisible] =
        React.useState<boolean>(false);

    const scrollToTarget = (target?: string, duration = 400) => {
        let targeted = 0;
        if (target && document.querySelector(target) !== null) {
            targeted =
                document?.querySelector(target)?.getBoundingClientRect().top ||
                0;
        }

        const targetPosition: number = targeted;
        const startPosition: number = window.pageYOffset;
        const distance: number = targetPosition - startPosition;
        let startTime: null | number = null;

        const effect = (t: number, b: number, c: number, d: number) => {
            t /= d;
            t -= 1;
            return c * (t * t * t + 1) + b;
        };

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - (startTime || 0);
            const run = effect(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    };

    function checkScrollPosition() {
        const scroll = document.documentElement.scrollTop;
        if (scroll > visibleFrom) {
            setIsScrollVisible(true);
        } else {
            setIsScrollVisible(false);
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition);

        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, [isScrollVisible]);

    return (
        <div css={JumpToTopStyles(theme)}>
            <div
                className={`${className} ${
                    !isScrollVisible ? `${className}-hidden` : ''
                }`}
                role='button'
                tabIndex={0}
                onClick={() => scrollToTarget(targetElement, animationDuration)}
            >
                <div className={`${className}--button`}>
                    <Icon />
                    {title && (
                        <span className={`${className}--title`}>{title}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JumpToTop;
