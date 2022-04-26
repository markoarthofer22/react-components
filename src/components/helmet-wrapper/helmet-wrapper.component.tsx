import React from 'react';
import { Helmet } from 'react-helmet';

interface IHelmetProps {
    globalWebName?: string;
    pageName: string;
    metaArray?: [
        {
            [key: string]: string;
        }
    ];
}

const HelmetWrapper: React.FC<IHelmetProps> = ({
    globalWebName = 'Connect Web',
    pageName,
    metaArray = [
        {
            name: 'geo.region',
            content: 'RS-01',
        },
        {
            name: 'geo.placename',
            content: '',
        },
        {
            name: 'geo.position',
            content: '45.60000;19.20000',
        },
        {
            name: 'ICBM',
            content: '45.60000;19.20000',
        },
    ],
}): JSX.Element => (
    <Helmet>
        {metaArray?.map((item: any, index: number) => (
            <meta key={index} {...item} />
        ))}

        <title>
            {globalWebName} | {pageName}
        </title>
        <script src='javascript/color-scheme.js' type='text/javascript' />
    </Helmet>
);

export default HelmetWrapper;
