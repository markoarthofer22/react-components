import React, { useState } from 'react';
import NavigationItem from './navigation.item.component';
import { useSelector } from 'react-redux';
import { selectNavigation } from '../../redux/globals/globals.selectors';
import { selectGlobalsCategories } from '../../redux/globals/globals.selectors';
import Button from '../buttons/button.component';
import Logo from '../header/logo.component';
import { NavLink } from 'react-router-dom';
import Categories from '../header/categories.component';
import './navigation-mobile.scss';
import useModal from '../popup/useModal.hook';
import UserRegisterComponent from '../user/register/userRegister.component';
import UserLogin from '../user/login/userLogin.component';
import AjaxSearchBar from '../ajax-search-bar/ajax-search-bar.component';
import Hamburger from '../hamburger-menu/hamburger.component';
import Venues from '../header/venues.component';

const NavigationMobile = props => {
    const headerNav = useSelector(selectNavigation);
    const categories = useSelector(selectGlobalsCategories);

    const [isShowingCategories, setIsShowingCategories] = useState(false);
    const [isShowingVenues, setIsShowingVenues] = useState(false);
    const [isShowingRegister, toggleRegister] = useModal();
    const [isShowingLogin, toggleLogin] = useModal();

    return (
        <>
            <div className="mobile-header">
                <NavLink to="/">
                    <Logo className="logo-mobile" />
                </NavLink>

                <Hamburger />
            </div>

            <div className="nav-holder">
                <div className="login-actions">
                    <div className="buttons">
                        <Button title="Login" class="action" clicked={toggleLogin} />
                        <Button title="Register" class="action" clicked={toggleRegister} />
                    </div>
                    <AjaxSearchBar />
                </div>
                <ul className="menu-mobile">
                    <li>
                        <Button class="categories-mobile" aria-label="Categories" clicked={() => setIsShowingCategories(!isShowingCategories)}>
                            Categories
                        </Button>
                        <div className="categories-holder">
                            <Categories
                                isMobile={true}
                                categories={categories}
                                isShowing={isShowingCategories}
                                handleClose={() => setIsShowingCategories(false)}
                            />
                        </div>
                    </li>
                    <li>
                        <Button class="categories-mobile" aria-label="Venues" clicked={() => setIsShowingVenues(!isShowingVenues)}>
                            Venues
                        </Button>
                        <div className="categories-holder">
                            <Venues isMobile={true} isShowing={isShowingVenues} handleClose={() => setIsShowingVenues(false)} />
                        </div>
                    </li>

                    {headerNav.map((item, index) => {
                        return <NavigationItem key={index} item={item} />;
                    })}
                </ul>
            </div>
            <UserRegisterComponent isShowing={isShowingRegister} handleClose={() => toggleRegister()} />
            <UserLogin isShowing={isShowingLogin} handleClose={() => toggleLogin()} />
        </>
    );
};

export default NavigationMobile;
