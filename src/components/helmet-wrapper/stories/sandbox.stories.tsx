import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HelmetWrapper } from '../src/index';
import PageDoc from './development.mdx';

export default {
    title: 'Designs/Atoms/Helmet Wrapper',
    component: HelmetWrapper,
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof HelmetWrapper>;

export const Default: ComponentStory<typeof HelmetWrapper> = (args) => {
    const metaArray = [
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
    ];

    React.useEffect(() => {
        localStorage.setItem('helmet-meta', JSON.stringify(metaArray));
    }, []);

    return <HelmetWrapper {...args} pageName='Test page' />;
};
