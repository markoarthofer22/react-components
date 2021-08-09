import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './breadcrumbs.styles.scss';

const Breadcrumbs = ({ ID, _title, _link, override }) => {
    const [paths, setPaths] = useState([
        {
            name: 'Home',
            navLink: '/',
        },

        {
            name: 'Events',
            navLink: '/events',
        },
        {
            name: override || _title,
            navLink: _link,
        },
    ]);

    useEffect(() => {
        // setPaths(prevPaths => [...prevPaths, { name: _title, navLink: _link }]);
    }, [_link, _title]);

    return (
        <ol
            itemType='https://schema.org/BreadcrumbList'
            itemScope
            className='breadcrumbs'
        >
            {paths.map((item, index) => (
                <li
                    itemProp='itemListElement'
                    itemScope
                    itemType='https://schema.org/ListItem'
                    key={item.navLink}
                >
                    <NavLink itemProp='item' to={item.navLink}>
                        <span itemProp='name'>{item.name}</span>
                    </NavLink>
                    <meta itemProp='position' content={index + 1} />
                </li>
            ))}
        </ol>
    );
};

export default Breadcrumbs;
