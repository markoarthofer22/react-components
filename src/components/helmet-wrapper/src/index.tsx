import React from 'react';
import { Helmet } from 'react-helmet';

export interface IHelmetProps {
    globalWebName?: string;
    pageName: string;
    metaArray?: [
        {
            [key: string]: string;
        }
    ];
    localStorageKey?: string;
}

export const HelmetWrapper: React.FC<IHelmetProps> = ({
    globalWebName,
    pageName,
    metaArray,
    localStorageKey = 'helmet-meta',
}): JSX.Element => {
    const [localStorageMeta, setLocalStorageMeta] = React.useState<any[]>(
        metaArray || []
    );

    React.useEffect(() => {
        if (!localStorage.getItem(localStorageKey)) return;

        const parsedStorage = JSON.parse(
            localStorage.getItem(localStorageKey) || '[]'
        );

        setLocalStorageMeta(parsedStorage);
    }, [localStorage]);

    const getPageName = (): string =>
        globalWebName ? `${globalWebName} | ${pageName}` : pageName;

    return (
        <Helmet>
            {localStorageMeta?.map((item: any, index: number) => (
                <meta key={index} {...item} />
            ))}

            <title>{getPageName().toString()}</title>
        </Helmet>
    );
};

export default HelmetWrapper;
