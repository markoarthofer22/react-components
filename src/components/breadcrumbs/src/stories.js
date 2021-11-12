import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { RiCloseCircleLine } from 'react-icons/ri';
import { uniqueId } from 'underscore';
import Breadcrumbs from './';

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
        <Breadcrumbs hasHomeIcon isHomeRoot crumbs={crumbsWithoutHome} />
    ))
    .add('Breadcrumbs with Home root and custom icon', () => (
        <Breadcrumbs
            hasHomeIcon
            homeIcon={RiCloseCircleLine}
            isHomeRoot
            crumbs={crumbsWithoutHome}
        />
    ))
    .add('Breadcrumbs without Home root and with custom icon', () => (
        <Breadcrumbs
            hasHomeIcon
            homeIcon={RiCloseCircleLine}
            isHomeRoot={false}
            crumbs={crubsWithHome}
        />
    ))
    .add('Breadcrumbs without icon', () => (
        <Breadcrumbs
            hasHomeIcon={false}
            isHomeRoot
            crumbs={crumbsWithoutHome}
        />
    ));
