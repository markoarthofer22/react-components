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
}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({
    hasHomeIcon = true,
    homeIcon,
    isHomeRoot = true,
    crumbs,
}): JSX.Element => {
    const theme = useTheme();

    const initialArray: ICrumb[] = isHomeRoot
        ? [
              {
                  id: uniqueId('breadcrumbs_'),
                  title: 'Home',
                  link: '/',
              },
              ...crumbs,
          ]
        : [...crumbs];

    const [breadcrumbs] = useState<ICrumb[]>(initialArray);

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
