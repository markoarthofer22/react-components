import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { TSideNavRoutes } from '.';

interface ISideNavChildProps {
    route: TSideNavRoutes;
    showAnimation: any;
    isOpen: boolean;
    setIsOpen: (e: boolean) => any | void;
    className?: string;
}

const SideNavChild: React.FC<ISideNavChildProps> = ({
    route,
    showAnimation,
    isOpen,
    className = 'side-nav',
    setIsOpen,
}): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsOpen(true);
    };

    React.useEffect(() => {
        if (!isOpen) {
            setIsMenuOpen(false);
        }
    }, [isOpen]);

    const menuAnimation = {
        hidden: {
            opacity: 0,
            height: 0,
            padding: 0,
            transition: { duration: 0.3, when: 'afterChildren' },
        },
        show: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
                when: 'beforeChildren',
            },
        },
    };
    const menuItemAnimation = {
        hidden: (i: number) => ({
            padding: 0,
            x: '-100%',
            transition: {
                duration: (i + 1) * 0.1,
            },
        }),
        show: (i: number) => ({
            x: 0,
            transition: {
                duration: (i + 1) * 0.1,
            },
        }),
    };

    const Icon = route.icon as React.ElementType;

    return (
        <>
            <div className={`${className}--menu`} onClick={toggleMenu}>
                <div className={`${className}--menu-item`}>
                    <div className={`${className}--menu-icon`}>
                        <Icon />
                    </div>
                    <AnimatePresence>
                        {isOpen && (
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
                </div>
                {isOpen && (
                    <motion.div
                        animate={
                            isMenuOpen
                                ? {
                                      rotate: -90,
                                  }
                                : { rotate: 0 }
                        }
                    >
                        <FaAngleDown />
                    </motion.div>
                )}
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuAnimation}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className={`${className}--menu-container`}
                    >
                        {route?.children?.map(
                            (item: TSideNavRoutes, i: number) => {
                                const SubIcon = route.icon as React.ElementType;
                                return (
                                    <motion.div
                                        variants={menuItemAnimation}
                                        key={i}
                                        custom={i}
                                    >
                                        <NavLink
                                            to={item.path}
                                            className={`${className}--link sublink`}
                                        >
                                            <div
                                                className={`${className}--icon`}
                                            >
                                                <SubIcon />
                                            </div>
                                            <motion.div
                                                className={`${className}--link-text`}
                                            >
                                                {item.name}
                                            </motion.div>
                                        </NavLink>
                                    </motion.div>
                                );
                            }
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SideNavChild;
