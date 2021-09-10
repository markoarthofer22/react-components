import React from 'react';
import NavigationItem from './navigation.item.component';
import { useSelector } from 'react-redux';
import { selectNavigation } from '../../redux/globals/globals.selectors';
import './navigation.scss';

const Navigation = (props) => {
    const headerNav = useSelector(selectNavigation);

    return (
        <ul className='menu'>
            {headerNav.map((item, index) => {
                return <NavigationItem key={index} item={item} />;
            })}
        </ul>
    );
};

export default Navigation;
