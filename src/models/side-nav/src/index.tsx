/** @jsxImportSource @emotion/react */
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@emotion/react';

import { SideNavStyles } from './styles';
import SideNavChild from './side-nav-child';

export type TIconType =
    | React.ElementType
    | React.ComponentType
    | React.ReactNode;

export type TSideNavRoutes = {
    path: string;
    name: string;
    icon: TIconType;
    exact?: boolean;
    children?: TSideNavRoutes[];
};

export interface ISideNavProps {
    title?: string;
    isOpen?: boolean;
    className?: string;
    isSearchEnabled?: boolean;
    routes: TSideNavRoutes[];
    onSearchChange?: (e: React.SyntheticEvent, payload?: any) => any | void;
    // primaryColor?: string;
    // secondaryColor?: string;
}

export const SideNav: React.FC<ISideNavProps> = ({
    title,
    isOpen = false,
    isSearchEnabled = true,
    className = 'side-nav',
    routes,
    onSearchChange,
    // primaryColor,
    // secondaryColor,
}): JSX.Element => {
    const [navOpened, setNavOpened] = React.useState(isOpen);

    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: '140px',
            padding: '5px 15px',
            transition: {
                duration: 0.2,
            },
        },
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: 'auto',
            transition: {
                duration: 0.5,
            },
        },
    };

    const theme = useTheme();

    return (
        <motion.div
            animate={{
                width: navOpened ? '220px' : '45px',
                transition: {
                    duration: 0.5,
                    type: 'spring',
                    damping: 10,
                },
            }}
            className={`${className}`}
            css={SideNavStyles(theme)}
        >
            <div className={`${className}--top-section`}>
                {title && (
                    <AnimatePresence>
                        {navOpened && (
                            <motion.h1
                                variants={showAnimation}
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                                className={`${className}--logo`}
                            >
                                {title}
                            </motion.h1>
                        )}
                    </AnimatePresence>
                )}
                <div className={`${className}--menu-button`}>
                    <FaBars onClick={() => setNavOpened(!navOpened)} />
                </div>
            </div>
            {isSearchEnabled && (
                <div className={`${className}--search`}>
                    <div className={`${className}--search-icon`}>
                        <BiSearch />
                    </div>
                    <AnimatePresence>
                        {navOpened && (
                            <motion.input
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                                variants={inputAnimation}
                                type='text'
                                placeholder='Search'
                                onChange={(e) =>
                                    onSearchChange && onSearchChange(e)
                                }
                            />
                        )}
                    </AnimatePresence>
                </div>
            )}
            <div className={`${className}--routes`}>
                {routes.map((route: TSideNavRoutes, i: number) => {
                    const Icon = route.icon as React.ElementType;

                    if (route.children) {
                        return (
                            <SideNavChild
                                key={i}
                                setIsOpen={setNavOpened}
                                route={route}
                                showAnimation={showAnimation}
                                isOpen={navOpened}
                                className={className}
                            />
                        );
                    }

                    return (
                        <NavLink
                            to={route.path}
                            key={i}
                            className={`${className}--link`}
                            activeClassName={`${className}--link-active`}
                        >
                            <div className={`${className}--icon`}>
                                <Icon />
                            </div>
                            <AnimatePresence>
                                {navOpened && (
                                    <motion.div
                                        variants={showAnimation}
                                        initial='hidden'
                                        animate='show'
                                        exit='hidden'
                                        className={`${className}--link-text`}
                                    >
                                        {route.name}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </NavLink>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default SideNav;
