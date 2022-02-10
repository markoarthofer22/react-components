/** @jsxImportSource @emotion/react */
import * as React from 'react';

export interface IIfProps {
    condition: boolean;
    children: React.ReactNode;
    otherwise?: React.ReactNode | null;
}

export const If: React.FC<IIfProps> = React.memo<IIfProps>(
    ({ condition, children, otherwise = null }): JSX.Element =>
        condition ? <>{children}</> : otherwise ? <>{otherwise}</> : <></>,
    (props, oldProps) => props.condition === oldProps.condition
);

export interface IForProps {
    of: Array<any>;
    each?: string;
    index?: string;
    children: any;
    primaryKey?: string;
}

export const For: React.FC<IForProps> = ({
    of,
    each = 'item',
    index = 'index',
    children,
    primaryKey,
}): JSX.Element => {
    function isObject(data: any) {
        return typeof data === 'object';
    }

    function mapItem(item: any, idx: number) {
        const { type: Item, props: itemProps } = React.Children.only(children);

        const mappedProps = isObject(item)
            ? {
                  key: primaryKey ? item[primaryKey] : idx,
                  ...item,
              }
            : {
                  key: primaryKey ? item[primaryKey] : item,
                  [each]: item,
              };
        mappedProps[index] = idx;

        return <Item {...mappedProps} {...itemProps} />;
    }

    const results = of.map((b, i) => mapItem(b, i));

    return <>{results}</>;

    // const { of, as: Items, primaryKey, indexKey, destructure, itemKey, ...others } = this.props;
};

// export interface IWhenProps {
//     condition: boolean;
//     children: React.ReactNode;
// }

// export const When: React.FC<IWhenProps> = React.memo<IIfProps>(
//     ({ condition, children }): JSX.Element | null =>
//         condition ? <>{children}</> : null,
//     (props, oldProps) => props.condition === oldProps.condition
// );

// export interface IOtherwiseProps {
//     children: React.ReactNode;
// }

// export const Otherwise: React.FC<IOtherwiseProps> = ({children}): JSX.Element => <>{children}</>

// export interface IChooseProps {
//     children: typeof When | typeof Otherwise;
// }

// export const Choose: React.FC<IChooseProps> = ({ children }): JSX.Element => (
//     <>{children}</>
// );
