import React, { useState, useEffect, useCallback } from 'react';

export default function useIsBreakpoint() {
    const [isMobileView, setIsMobileView] = useState(false);

    const checkWidth = () => {
        setIsMobileView(window.getComputedStyle(document.body, '::before').content.replace(/\"/g, ''));
    };

    useEffect(() => {
        checkWidth();
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        window.addEventListener('resize', checkWidth);

        return () => {
            window.removeEventListener('resize', checkWidth);
        };
    }, [isMobileView]);

    return isMobileView;
}
