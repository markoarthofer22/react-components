/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { AvatarStyles } from './styles';

type IconType = React.ElementType | React.ComponentType;

type Color = string | 'transparent';

interface AvatarProps {
    stringifyLetter?: boolean;
    grouped?: boolean;
    size?: 'small' | 'normal' | 'big';
    variant?: 'squared' | 'circled' | 'rounded';
    values?: IconType[];
    children?: React.ElementType | React.ReactNode;
    backgroundColor?: Color;
    groupedLimit?: string | number;
}

const Avatar: React.FC<AvatarProps> = ({
    stringifyLetter = false,
    grouped = false,
    size = 'normal',
    variant = 'circled',
    values,
    children,
    backgroundColor = 'transparent',
    groupedLimit = '3',
}): JSX.Element => {
    const theme = useTheme();

    const [itemsLength, setItemsLength] = useState<number | null>(null);

    const getInitialsFromString = (
        childElement: any
    ): string | typeof children => {
        if (typeof childElement?.props?.children !== 'string')
            return childElement;

        const mainString = childElement?.props.children;
        return mainString.match(/\b(\w)/g).join('');
    };

    const getVariant = (_variant: typeof variant): string =>
        `avatar--item-${_variant}`;

    const getSize = (_size: typeof size): string => `avatar--item-${_size}`;

    useEffect(() => {
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
        <div className='avatar' css={AvatarStyles(theme)}>
            <div
                className={`avatar--wrapper ${
                    grouped ? 'avatar--wrapper--grouped' : ''
                }`}
            >
                {values
                    ? values.map(
                          (child, i) =>
                              i < Number(groupedLimit) && (
                                  <div
                                      className={`avatar--item ${getVariant(
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
                                      className={`avatar--item ${getVariant(
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
                        className={`avatar--item ${getVariant(
                            variant
                        )} ${getSize(size)} avatar--item--counter`}
                    >
                        <p>+{itemsLength}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Avatar;
