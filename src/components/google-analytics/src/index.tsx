import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

declare global {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface Window {
        gtag: any;
    }
}

interface IAnalyticsProps extends RouteComponentProps<any> {
    ID: string;
    handleLocationChange: (
        history: RouteComponentProps['history']
    ) => any | void;
}

const GoogleAnalytics: React.FC<IAnalyticsProps> = ({
    location,
    history,
    ID,
    handleLocationChange,
}): any => {
    const { gtag } = window;

    React.useEffect(() => {
        if (!handleLocationChange) return;

        handleLocationChange(history);
    }, [history.location, handleLocationChange]);

    if (typeof window === 'undefined') return;

    if (location.pathname === window.location.pathname) {
        // don't log identical link clicks (nav links likely)
        return;
    }

    if (history.action === 'PUSH' && typeof gtag === 'function') {
        gtag('config', ID, {
            page_title: document.title,
            page_location: window.location.href,
            page_path: location.pathname,
        });
    }
};

export default withRouter(GoogleAnalytics);
