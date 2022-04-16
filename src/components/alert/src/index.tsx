/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
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
    backgroundColor?: TColor;
    className?: string;
    onClose?: (e?: React.MouseEvent) => void;
    show: boolean;
}

export const Alert: React.FC<IAlertProps> = ({
    type = 'info',
    title,
    variant = 'bordered',
    closeIcon,
    children,
    className = 'alert',
    onClose,
    icon = true,
    backgroundColor,
    show,
}): JSX.Element => {
    const [isActive, setIsActive] = React.useState<boolean>(show);

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

    // TODO - return state value without adding explicit prop
    // React.useEffect(() => {
    //     const timer = setTimeout(() => setIsActive(false), 5000);
    //     return () => clearTimeout(timer);
    // }, []);

    React.useEffect(() => {
        if (isActive === show) return;

        setIsActive(show);
    }, [show]);

    return (
        <div className={`${className}`} css={AlertStyles(theme)}>
            <CSSTransition
                in={isActive}
                timeout={400}
                classNames='alert'
                unmountOnExit
            >
                <div
                    style={backgroundColor ? { backgroundColor } : {}}
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
                        <div className={`${className}--content`}>
                            {children}
                        </div>
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
            </CSSTransition>
        </div>
    );
};

export default Alert;
