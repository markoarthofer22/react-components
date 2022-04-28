/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useTheme, css } from '@emotion/react';

const GUTTER = 0.9375;
const COL_BASE_FLEX_SIZE = 8.33333;
const PADDING_X = 16;
const PADDING_Y = 12;

export interface IGridProps {
    paddingX?: number;
    paddingY?: number;
    isCentered?: boolean;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false | number;
    children: React.ReactNode;
    style?: {
        [key: string]: any;
    };
}

export const Grid: React.FC<IGridProps> = ({
    isCentered = true,
    paddingX = PADDING_X,
    paddingY = PADDING_Y,
    maxWidth = 'xl',
    children,
    style,
}): JSX.Element => {
    const theme: any = useTheme();

    const arrOfSizes = {
        xs: '100%',
        sm: theme.breakpoints.sm,
        md: theme.breakpoints.md,
        lg: theme.breakpoints.lg,
        xl: theme.breakpoints.xlg,
    };

    const size =
        maxWidth === false
            ? 'none'
            : typeof maxWidth === 'number'
            ? `${maxWidth}px`
            : arrOfSizes[maxWidth];

    const gridStyles = css({
        paddingRight: paddingX,
        paddingLeft: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        maxWidth: size,
        marginLeft: isCentered ? 'auto' : 'initial',
        marginRight: isCentered ? 'auto' : 'initial',
    });

    return <div css={{ ...gridStyles, ...style }}>{children}</div>;
};

export type TGridItemsAlignment =
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'stretch'
    | 'baseline';

export type TGridJustify =
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

export interface IRowProps {
    children: React.ReactNode;
    alignItems?: TGridItemsAlignment;
    expanded?: boolean;
    justify?: TGridJustify;
    row?: boolean;
    gutter?: number;
    style?: {
        [key: string]: any;
    };
}

export const Row: React.FC<IRowProps> = ({
    children,
    alignItems = 'flex-start',
    expanded = false,
    justify = 'flex-start',
    row = true,
    gutter = GUTTER,
    style,
}): JSX.Element => {
    const isRow: boolean = row;

    const rowStyle = {
        display: 'flex',
        flexFlow: 'row wrap',
        marginRight: 'auto',
        marginLeft: 'auto',
    };

    const colStyle = {
        flex: '1 1 0px',
        paddingLeft: `${gutter}rem`,
        paddingRight: `${gutter}rem`,
        boxSizing: 'border-box' as const,
    };

    const defaultType = !isRow ? colStyle : rowStyle;

    return (
        <div
            css={{
                ...defaultType,
                maxWidth: isRow && expanded ? 'none' : '80%',
                alignItems: isRow && alignItems ? alignItems : '',
                justifyContent: isRow && justify ? justify : '',
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export type TGridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface IColumnProps {
    children: React.ReactNode;
    gutter?: number;
    xs?: TGridSizes;
    sm?: TGridSizes;
    md?: TGridSizes;
    lg?: TGridSizes;
    xl?: TGridSizes;
    style?: {
        [key: string]: any;
    };
}

export const Col: React.FC<IColumnProps> = ({
    children,
    xs = 12,
    sm = 12,
    md = 12,
    lg = 12,
    xl = 12,
    gutter = GUTTER,
    style,
}): JSX.Element => {
    const theme: any = useTheme();

    const colStyle = {
        flex: '1 1 0px',
        paddingLeft: `${gutter}rem`,
        paddingRight: `${gutter}rem`,
        boxSizing: 'border-box' as const,
    };

    const childClassStyle = {
        marginLeft: `-${GUTTER}rem`,
        marginRight: `-${GUTTER}rem`,
    };

    const breakpoints = [
        theme.breakpoints.sm,
        theme.breakpoints.md,
        theme.breakpoints.lg,
        theme.breakpoints.xlg,
    ];

    const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

    const calculateColumnSize = (sizes: TGridSizes[]) =>
        css({
            ...colStyle,
            flex: `0 0 ${COL_BASE_FLEX_SIZE * sizes[0]}%`,
            maxWidth: `${COL_BASE_FLEX_SIZE * sizes[0]}%`,
            [mq[0]]: {
                flex: `0 0 ${COL_BASE_FLEX_SIZE * sizes[1]}%`,
                maxWidth: `${COL_BASE_FLEX_SIZE * sizes[1]}%`,
            },
            [mq[1]]: {
                flex: `0 0 ${COL_BASE_FLEX_SIZE * sizes[2]}%`,
                maxWidth: `${COL_BASE_FLEX_SIZE * sizes[2]}%`,
            },
            [mq[2]]: {
                flex: `0 0 ${COL_BASE_FLEX_SIZE * sizes[3]}%`,
                maxWidth: `${COL_BASE_FLEX_SIZE * sizes[3]}%`,
            },
            [mq[3]]: {
                flex: `0 0 ${COL_BASE_FLEX_SIZE * sizes[4]}%`,
                maxWidth: `${COL_BASE_FLEX_SIZE * sizes[4]}%`,
            },
            ...style,
        });

    return (
        <div css={calculateColumnSize([xs, sm, md, lg, xl])}>
            {children &&
                React.Children.map(children, (child: any, i) =>
                    React.cloneElement(child, {
                        key: i,
                        style:
                            child.type.displayName === 'Row'
                                ? childClassStyle
                                : {},
                    })
                )}
        </div>
    );
};
