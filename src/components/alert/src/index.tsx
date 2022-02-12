/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import * as React from 'react';
// import { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import {
    MdInfoOutline,
    MdWarningAmber,
    MdOutlineErrorOutline,
    MdDoneAll,
    MdClose,
} from 'react-icons/md';
import { AlertStyles } from './styles';

export type TIconType =
    | React.ElementType
    | React.ComponentType
    | React.ReactNode;

export type TColor = string | 'transparent';

export interface IAlertProps {
    type?: 'info' | 'warning' | 'error' | 'success';
    variant?: 'bordered' | 'filled';
    title?: string;
    children: React.ElementType | React.ReactNode;
    closeIcon?: TIconType;
    icon?: TIconType | boolean;
    // backgroundColor?: TColor;
    className?: string;
    onClose?: (e?: React.MouseEvent) => void;
}

export const Alert: React.FC<IAlertProps> = ({
    type = 'info',
    title,
    variant = 'bordered',
    closeIcon,
    children,
    className = 'alert',
    onClose,
    icon,
    // backgroundColor,
}): JSX.Element => {
    const theme = useTheme();

    const CloseIcon = (closeIcon as React.ElementType) || MdClose;

    const checkWhatIsIcon = (
        _type: typeof type
    ): React.ElementType | JSX.Element => {
        const Icon = icon as React.ElementType;

        switch (_type) {
            case 'info':
                if (typeof icon === 'boolean') return <MdInfoOutline />;
                return <Icon />;

            case 'warning':
                if (typeof icon === 'boolean') return <MdWarningAmber />;
                return <Icon />;

            case 'error':
                if (typeof icon === 'boolean') return <MdOutlineErrorOutline />;
                return <Icon />;

            case 'success':
                if (typeof icon === 'boolean') return <MdDoneAll />;
                return <Icon />;

            default:
                return <Icon />;
                break;
        }
    };

    const getVariant = (_variant: typeof variant): string =>
        `${className}--wrapper--variant-${_variant}`;

    const getType = (_type: typeof type): string => `type-${_type}`;

    return (
        <div className={`${className}`} css={AlertStyles(theme)}>
            <div
                className={`${className}--wrapper ${getVariant(
                    variant
                )} ${getType(type)}`}
            >
                {icon && (
                    <div className={`${className}--main-icon`}>
                        {checkWhatIsIcon(type)}
                    </div>
                )}
                <div className={`${className}--content--wrapper`}>
                    {title && (
                        <div className={`${className}--title`}>{title}</div>
                    )}
                    <div className={`${className}--content`}>{children}</div>
                </div>
                {onClose && (
                    <div
                        className={`${className}--on-close`}
                        onClick={(e) => onClose(e)}
                    >
                        <CloseIcon />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Alert;
