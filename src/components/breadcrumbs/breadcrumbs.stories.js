import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { RiCloseCircleLine } from 'react-icons/ri';
import Breadcrumbs from './breadcrumbs.component';
import { uniqueId } from 'underscore';
import GlobalThemeProvider from '../../themes/global-theme.provider';

const crumbsWithoutHome = [
    {
        id: uniqueId('breadcrumbs_'),
        title: 'Link one',
        link: '/link-one',
    },
    {
        id: uniqueId('breadcrumbs_'),
        title: 'Last destination',
        link: '/last-destination',
    },
];

const crubsWithHome = [
    {
        id: uniqueId('breadcrumbs_'),
        title: 'Home',
        link: '/custom-link-to-home',
    },
    {
        id: uniqueId('breadcrumbs_'),
        title: 'Link one',
        link: '/link-one',
    },
    {
        id: uniqueId('breadcrumbs_'),
        title: 'Last destination',
        link: '/last-destination',
    },
];

storiesOf(`Designs/Atoms/Breadcrumbs`, module)
    .addDecorator(withKnobs)
    .add('Breadcrumbs with Home root and default icon', () => (
        <GlobalThemeProvider>
            <Breadcrumbs hasHomeIcon isHomeRoot crumbs={crumbsWithoutHome} />
        </GlobalThemeProvider>
    ))
    .add('Breadcrumbs with Home root and custom icon', () => (
        <GlobalThemeProvider>
            <Breadcrumbs
                hasHomeIcon
                homeIcon={RiCloseCircleLine}
                isHomeRoot
                crumbs={crumbsWithoutHome}
            />
        </GlobalThemeProvider>
    ))
    .add('Breadcrumbs without Home root and with custom icon', () => (
        <GlobalThemeProvider>
            <Breadcrumbs
                hasHomeIcon
                homeIcon={RiCloseCircleLine}
                isHomeRoot={false}
                crumbs={crubsWithHome}
            />
        </GlobalThemeProvider>
    ))
    .add('Breadcrumbs without icon', () => (
        <GlobalThemeProvider>
            <Breadcrumbs
                hasHomeIcon={false}
                isHomeRoot
                crumbs={crumbsWithoutHome}
            />
        </GlobalThemeProvider>
    ));
