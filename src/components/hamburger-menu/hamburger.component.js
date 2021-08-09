import React from 'react';
import './hamburger.scss';
import {useDispatch, useSelector} from 'react-redux';
import {hamburgerState} from '../../redux/user/user.selectors';
import {toggleHamburger} from '../../redux/user/user.actions';

const Hamburger = props => {
    const {hamburgerClass} = props;
    const dispatch = useDispatch();
    const isHamburgerOpen = useSelector(hamburgerState);

    const toggleMenu = () => {
        dispatch(toggleHamburger(!isHamburgerOpen));
    };

    return (
        <div
            className={`${hamburgerClass ? hamburgerClass : 'openMenu'} ${isHamburgerOpen ? 'open' : ''}`}
            onClick={() => {
                toggleMenu();
            }}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Hamburger;
