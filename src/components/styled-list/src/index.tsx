/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useTheme } from '@emotion/react';

import { StyledListStyles } from './styles';

export type TIconType =
    | React.ElementType
    | React.ComponentType
    | React.ReactNode;

export interface IListItemProps {
    children: any;
    className?: string;
    icon?: TIconType;
    clicked?: (e: any) => any | void;
}

export const StyledListItem: React.FC<IListItemProps> = ({
    children,
    className,
    icon,
    clicked,
}): JSX.Element => {
    const Icon = icon as React.ElementType;
    return (
        <div
            className={`${className}--item ${
                clicked ? `${className}--item--link` : ''
            }`}
            onClick={(e) => clicked && clicked(e)}
        >
            <div className={`${className}--item--content`}>
                {icon && (
                    <span>
                        <Icon />
                    </span>
                )}
                {children}
            </div>
        </div>
    );
};

export type TData = {
    icon?: TIconType;
    content: string;
    clicked?: (e: any) => any | void;
};

export interface IStyledListProps {
    children?:
        | React.ReactElement<IListItemProps>
        | Array<React.ReactElement<IListItemProps>>;
    data?: Array<TData>;
    className?: string;
    title?: string;
}

export const StyledList: React.FC<IStyledListProps> = ({
    children,
    data,
    className = 'styled-list',
    title,
}): JSX.Element => {
    const theme = useTheme();

    return (
        <div className={`${className}`} css={StyledListStyles(theme)}>
            {title && <div className={`${className}--title`}>{title}</div>}
            <div className={`${className}--wrapper`}>
                {data && data.length > 0
                    ? data?.map((item: TData, index: number) => (
                          <StyledListItem
                              key={index}
                              className={className}
                              icon={item?.icon}
                              clicked={item?.clicked}
                          >
                              <p>{item.content}</p>
                          </StyledListItem>
                      ))
                    : children &&
                      React.Children.map(children, (child: any, i: number) =>
                          React.cloneElement(child, {
                              key: i,
                              className,
                          })
                      )}
            </div>
        </div>
    );
};

export default StyledList;
