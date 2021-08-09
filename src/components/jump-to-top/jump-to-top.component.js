import React, { useEffect, useState } from 'react';
import './jump-to-top.scss';
import SvgIcon from '../svg-icon/svg-icon.component';
import Container from '../layout/container.component';

const JumpToTop = props => {
    const { icon, title, targetElement, animationDuration, elementClass, visibleFrom } = props;
    const [isScrollVisible, setIsScrollVisible] = useState(false);

    const scrollToTarget = (_target, _duration) => {
        //let target = document.querySelector(_target);
        let targetPosition = 0; //target.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let distance = targetPosition - startPosition;
        let startTime = null;

        const animation = _currentTime => {
            if (startTime === null) startTime = _currentTime;
            let timeElapsed = _currentTime - startTime;
            let run = effect(timeElapsed, startPosition, distance, _duration);
            window.scrollTo(0, run);
            if (timeElapsed < _duration) requestAnimationFrame(animation);
        };

        const effect = (t, b, c, d) => {
            t /= d;
            t--;
            return c * (t * t * t + 1) + b;
        };

        requestAnimationFrame(animation);
    };

    function checkScrollPosition(event) {
        var scroll = this.scrollY;
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
        <div className={`${elementClass} ${!isScrollVisible ? 'hidden' : ''}`} onClick={() => scrollToTarget(targetElement, animationDuration)}>
            <Container>
                <div className="jump-button">
                    <SvgIcon icon={icon} />
                    {title && <span className="title">{title}</span>}
                </div>
            </Container>
        </div>
    );
};

export default JumpToTop;
