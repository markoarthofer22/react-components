/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { MdStore } from 'react-icons/md';
import { uniqueId } from 'underscore';
import { BreadcrumbsStyles } from './styles';

interface ICrumb {
    id: string | number;
    link: string;
    title: string;
}

interface IBreadcrumbsProps {
    hasHomeIcon?: boolean;
    homeIcon?: React.ElementType | React.ComponentType;
    isHomeRoot?: boolean;
    crumbs: ICrumb[];
    className?: string;
}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({
    hasHomeIcon = true,
    homeIcon,
    isHomeRoot = true,
    crumbs,
    className = 'breadcrumbs',
}): JSX.Element => {
    const theme = useTheme();

    const initialArray: ICrumb[] = isHomeRoot
        ? [
              {
                  id: uniqueId(`${className}_`),
                  title: 'Home',
                  link: '/',
              },
              ...crumbs,
          ]
        : [...crumbs];

    const [breadcrumbs] = useState<ICrumb[]>(initialArray);

    const C = homeIcon || MdStore;

    return (
        <ol className={`${className}`} css={BreadcrumbsStyles(theme)}>
            {breadcrumbs.map((item, index) => (
                <li key={index} className={`${className}--item`}>
                    <NavLink
                        itemProp='item'
                        to={item.link}
                        className={`${className}--link`}
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
    );
};

export default Breadcrumbs;
