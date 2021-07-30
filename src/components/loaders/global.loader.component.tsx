import React from 'react';

// components
import { CSSTransition } from 'react-transition-group';

// styles
import './styles.scss';

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
        <div className={`main-loader-container ${customClass || ''}`}>
            <div className='loader'></div>
        </div>
    </CSSTransition>
);

export default GlobalLoader;
