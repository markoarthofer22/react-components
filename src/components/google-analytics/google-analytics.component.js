import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const GoogleAnalytics = ({ location, history, ID }) => {
    //const gtag = window.gtag;

    useEffect(() => {
        //setIsIndex(history.location.pathname);
    }, [history.location]);

    /* if (typeof window === 'undefined') return;

    if (location.pathname === window.location.pathname) {
        // don't log identical link clicks (nav links likely)
        //return null;
    }

    if (history.action === 'PUSH' && typeof gtag === 'function') {
        gtag('config', ID, {
            page_title: document.title,
            page_location: window.location.href,
            page_path: location.pathname
        });
    } */

    return null;
};

export default withRouter(GoogleAnalytics);
