/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { MdStore } from 'react-icons/md';
import { uniqueId } from 'underscore';
import { BreadcrumbsStyles } from './styles';

interface Crumb {
    id: string | number;
    link: string;
    title: string;
}

interface BreadcrumbsProps {
    hasHomeIcon?: boolean;
    homeIcon?: React.ElementType | React.ComponentType;
    isHomeRoot?: boolean;
    crumbs: Crumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    hasHomeIcon = true,
    homeIcon,
    isHomeRoot = true,
    crumbs,
}): JSX.Element => {
    const theme = useTheme();

    const initialArray: Crumb[] = isHomeRoot
        ? [
              {
                  id: uniqueId('breadcrumbs_'),
                  title: 'Home',
                  link: '/',
              },
              ...crumbs,
          ]
        : [...crumbs];

    const [breadcrumbs] = useState<Crumb[]>(initialArray);

    const C = homeIcon || MdStore;

    return (
        <div css={BreadcrumbsStyles(theme)}>
            <ol className='breadcrumbs'>
                {breadcrumbs.map((item, index) => (
                    <li key={index} className='breadcrumbs--item'>
                        <NavLink
                            itemProp='item'
                            to={item.link}
                            className='breadcrumbs--link'
                        >
                            {index === 0 && hasHomeIcon ? (
                                <C itemProp='name' />
                            ) : (
                                <span itemProp='name'>{item.title}</span>
                            )}
                        </NavLink>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Breadcrumbs;
