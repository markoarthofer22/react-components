import { useEffect, useState, useRef } from "react";

const useIntersection = options => {
    const [observerEntry, setEntry] = useState({});
    const elRef = useRef();
    const { threshold, rootMargin } = options;

    useEffect(() => {
        const observer = new IntersectionObserver(entries => setEntry(entries[0]), {
            threshold: threshold,
            rootMargin: rootMargin
        });

        observer.observe(elRef.current);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return { observerEntry, elRef };
};

export default useIntersection;
