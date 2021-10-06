import React from 'react';

// components
import { CSSTransition } from 'react-transition-group';

interface Props {
    isLoading: boolean;
    transitionDuration?: number;
    customClass?: string;
}

const GlobalLoader: React.FC<Props> = ({
    isLoading,
    transitionDuration,
    customClass,
}): JSX.Element => (
    <CSSTransition
        in={isLoading}
        timeout={transitionDuration || 300}
        classNames='loader'
        unmountOnExit
    >
        <div className={`loader--container ${customClass || ''}`}>
            <div className='loader' />
        </div>
    </CSSTransition>
);

export default GlobalLoader;
