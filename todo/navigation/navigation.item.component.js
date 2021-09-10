/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import RecentEvents from '../../layout-components/recent-events/recent-events.component';
import HelpBoxNavigation from '../help-box/help-box-nav.component';
import './navigation.scss';
import Popup from '../popup/popup.component';
import { CSSTransition } from 'react-transition-group';

const NavigationItem = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [isNodesOpen, toggleSecondNav] = useState(false);

    const onMouseOver = (e) => {};

    const onMouseOut = (e) => {};

    const onClick = () => {
        setOpen(!isOpen);
    };

    const toggleNodes = (e) => {
        e.preventDefault();
        toggleSecondNav(!isNodesOpen);
    };

    let CustomComponent = false;
    let linkTo = true;

    if (props.item.url === '/help') {
        CustomComponent = HelpBoxNavigation;
        linkTo = false;
    }
    if (props.item.url === '/recent') {
        CustomComponent = RecentEvents;
        linkTo = false;
    }

    return (
        // <li onClick={onClick} className={(isOpen ? ‘open’ : null) || (isNodesOpen ? ‘open-box’ : null)} onMouseEnter={props.item.children || CustomComponent ? onMouseOver : null} onMouseLeave={props.item.children || CustomComponent ? onMouseOut : null}>
        <li
            onClick={onClick}
            className={
                (isOpen ? 'open' : null) || (isNodesOpen ? 'open-box' : null)
            }
            onMouseEnter={
                props.item.children || CustomComponent ? onMouseOver : null
            }
            onMouseLeave={
                props.item.children || CustomComponent ? onMouseOut : null
            }
        >
            {linkTo && (
                <NavLink to={props.item.url}>
                    {props.item.title}
                    {(props.item.children || CustomComponent) && (
                        <div className='box'>
                            <div
                                className='opener'
                                onClick={(e) => {
                                    toggleNodes(e);
                                }}
                            />
                        </div>
                    )}
                </NavLink>
            )}
            {!linkTo && (
                <a>
                    {props.item.title}
                    {(props.item.children || CustomComponent) && (
                        <div className='box'>
                            <div
                                className='opener'
                                onClick={(e) => {
                                    toggleNodes(e);
                                }}
                            />
                        </div>
                    )}
                </a>
            )}
            {props.item.children && (
                <ul>
                    {props.item.children.map((item, index) => {
                        return <NavigationItem key={index} item={item} />;
                    })}
                </ul>
            )}
            {CustomComponent && (
                <CSSTransition
                    in={isOpen}
                    timeout={200}
                    classNames='slide-in'
                    unmountOnExit
                >
                    <Popup class='slide-in' closePopup={() => setOpen(false)}>
                        <CustomComponent
                            title='Need help?'
                            helpBoxType='help-box-navigation'
                        />
                    </Popup>
                </CSSTransition>
            )}
        </li>
    );
};
export default NavigationItem;
