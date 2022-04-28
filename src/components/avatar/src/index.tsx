/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useTheme } from '@emotion/react';
import { AvatarStyles } from './styles';

export type TIconType =
    | React.ElementType
    | React.ComponentType
    | React.ReactNode;

export type TColor = string | 'transparent';

export interface IAvatarProps {
    stringifyLetter?: boolean;
    grouped?: boolean;
    size?: 'small' | 'normal' | 'big';
    variant?: 'squared' | 'circled' | 'rounded';
    values?: Array<TIconType>;
    children?: React.ElementType | React.ReactNode;
    backgroundColor?: TColor;
    groupedLimit?: string | number;
    className?: string;
}

export const Avatar: React.FC<IAvatarProps> = ({
    stringifyLetter = false,
    grouped = false,
    size = 'normal',
    variant = 'circled',
    values,
    children,
    backgroundColor = 'transparent',
    groupedLimit = '3',
    className = 'avatar',
}): JSX.Element => {
    const theme = useTheme();

    const [itemsLength, setItemsLength] = React.useState<number | null>(null);

    const getInitialsFromString = (
        childElement: any
    ): string | typeof children => {
        if (typeof childElement?.props?.children !== 'string')
            return childElement;

        const mainString = childElement?.props.children;
        return mainString.match(/\b(\w)/g).join('');
    };

    const getVariant = (_variant: typeof variant): string =>
        `${className}--item-${_variant}`;

    const getSize = (_size: typeof size): string =>
        `${className}--item-${_size}`;

    React.useEffect(() => {
        if (!grouped) return;

        if (values) {
            if (Number(groupedLimit) >= values.length) {
                setItemsLength(null);
                return;
            }
            setItemsLength(values.length - Number(groupedLimit));
        } else if (children) {
            let max = 0;
            React.Children.map(children, (child: any, i) => {
                max = i + 1;
            });

            if (Number(groupedLimit) >= max) {
                setItemsLength(null);
                return;
            }

            setItemsLength(max - Number(groupedLimit));
        }
    }, [values, children, groupedLimit, grouped]);

    return (
        <div className={`${className}`} css={AvatarStyles(theme)}>
            <div
                className={`${className}--wrapper ${
                    grouped ? `${className}--wrapper--grouped` : ''
                }`}
            >
                {values
                    ? values.map(
                          (child, i) =>
                              i < Number(groupedLimit) && (
                                  <div
                                      className={`${className}--item ${getVariant(
                                          variant
                                      )} ${getSize(size)}`}
                                      key={i}
                                      style={{ backgroundColor }}
                                  >
                                      {stringifyLetter
                                          ? getInitialsFromString(child)
                                          : child}
                                  </div>
                              )
                      )
                    : children &&
                      React.Children.map(
                          children,
                          (child: any, i) =>
                              i < Number(groupedLimit) && (
                                  <div
                                      className={`${className}--item ${getVariant(
                                          variant
                                      )} ${getSize(size)}`}
                                      key={i}
                                      style={{
                                          backgroundColor,
                                          ...child?.props?.style,
                                      }}
                                  >
                                      {stringifyLetter
                                          ? getInitialsFromString(child)
                                          : child}
                                  </div>
                              )
                      )}
                {grouped && itemsLength && itemsLength > 0 && (
                    <div
                        className={`${className}--item ${getVariant(
                            variant
                        )} ${getSize(size)} ${className}--item--counter`}
                    >
                        <p>+{itemsLength}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Avatar;
