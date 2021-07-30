import React, { useContext } from 'react';

// Hoc
import clgComponentName from '../hoc/consoleComponentName';

// components
import { CSSTransition } from 'react-transition-group';

// styles
import './styles.scss';

// context
import { Context } from '../../contextStore/context';

const GlobalLoader = () => {
    const { globalState } = useContext(Context);

    return (
        <CSSTransition
            in={globalState?.isLoading}
            timeout={300}
            classNames="loader"
            unmountOnExit
        >
            <div className="main-loader-container">
                <div className="loader"></div>
            </div>
        </CSSTransition>
    );
};

export default clgComponentName(GlobalLoader, 'GlobalLoader');
