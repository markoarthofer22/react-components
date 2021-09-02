import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdStore } from 'react-icons/md';
import { uniqueId } from 'underscore';

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

// some stupid comment

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    hasHomeIcon = true,
    homeIcon,
    isHomeRoot = true,
    crumbs,
}): JSX.Element => {
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
        <ol
            itemType='https://schema.org/BreadcrumbList'
            itemScope
            className='breadcrumbs'
        >
            {breadcrumbs.map((item, index) => (
                <li
                    itemProp='itemListElement'
                    itemScope
                    itemType='https://schema.org/ListItem'
                    key={index}
                    className='breadcrumbs--item'
                >
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
                    <meta itemProp='position' content={String(index + 1)} />
                </li>
            ))}
        </ol>
    );
};

export default Breadcrumbs;
