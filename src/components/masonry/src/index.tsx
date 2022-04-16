/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useTheme } from '@emotion/react';

import { MasonryStyles } from './styles';

export interface IMasonryLayoutProps {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
    columns?: number;
    gap?: number;
    // data?: any[];
    // dataKey?: string;
}

export const MasonryLayout: React.FC<IMasonryLayoutProps> = ({
    children,
    className = 'masonry',
    columns = 3,
    gap = 20,
    // data,
    // dataKey = 'name',
}): JSX.Element => {
    const [renderedElements, setRenderedElements] = React.useState<
        React.ReactNode | React.ReactNode[]
    >([]);

    const theme = useTheme();
    const columnWrapper: any = {};
    const results: any[] = [];

    React.useEffect(() => {
        if (!children) return;

        for (let i = 0; i < columns; i += 1) {
            columnWrapper[`column${i}`] = [];
        }

        for (let i = 0; i < (children as React.ReactNode[]).length; i += 1) {
            const colIdx = i % columns;

            columnWrapper[`column${colIdx}`].push(
                <div style={{ marginBottom: `${gap}px` }}>{children[i]}</div>
            );
        }

        for (let i = 0; i < columns; i += 1) {
            results.push(
                <div
                    style={{
                        marginLeft: `${i > 0 ? gap : 0}px`,
                        flex: 1,
                    }}
                >
                    {columnWrapper[`column${i}`]}
                </div>
            );
        }

        setRenderedElements(results);
    }, []);

    return (
        <div className={`${className}`} css={MasonryStyles(theme)}>
            {renderedElements}
        </div>
    );
};

export default MasonryLayout;
