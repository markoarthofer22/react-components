import React, { useEffect, useState } from 'react';
import { MdTrendingUp } from 'react-icons/md';

interface JumpToTopProps {
    icon?: React.ElementType | React.ComponentType;
    title?: string;
    targetElement: string;
    visibleFrom: number;
    animationDuration?: number;
    customClass?: string;
}

const JumpToTop: React.FC<JumpToTopProps> = ({
    icon,
    title,
    targetElement,
    animationDuration = 400,
    customClass,
    visibleFrom,
}) => {
    const Icon = icon || MdTrendingUp;

    const [isScrollVisible, setIsScrollVisible] = useState<boolean>(false);

    const scrollToTarget = (target: string, duration: number) => {
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

    useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition);

        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, [isScrollVisible]);

    return (
        <div
            className={`jump-to-top ${customClass || ''} ${
                !isScrollVisible ? 'jump-to-top-hidden' : ''
            }`}
            onClick={() => scrollToTarget(targetElement, animationDuration)}
        >
            <div className='jump-to-top--button'>
                <Icon />
                {title && <span className='jump-to-top--title'>{title}</span>}
            </div>
        </div>
    );
};

export default JumpToTop;
