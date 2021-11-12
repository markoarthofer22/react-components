/** @jsxImportSource @emotion/react */
import React from 'react';
import { useTheme } from '@emotion/react';

import { SwitchButtonStyles } from './styles';

interface ISwitchButtonProps {
    className?: string;
    checked?: boolean;
    id: string;
    name: string;
    onChange?: (e?: any) => void | any;
    optionLabels?: {
        yes: string;
        no: string;
    };
    small?: boolean;
    disabled?: boolean;
    icon?: {
        yes: React.ElementType | React.ComponentType;
        no: React.ElementType | React.ComponentType;
    };
}

const SwitchButton: React.FC<ISwitchButtonProps> = ({
    id,
    name,
    checked = false,
    onChange,
    optionLabels = {
        yes: 'yes',
        no: 'no',
    },
    small = false,
    disabled = false,
    className = 'toggle-switch',
    icon,
}): JSX.Element => {
    const theme = useTheme();

    const handleKeyPress = (e: React.KeyboardEvent): void => {
        if (e.code !== '32' || !onChange) return;
        e.preventDefault();

        onChange(!checked);
    };

    return (
        <div css={SwitchButtonStyles(theme)}>
            <div
                className={`${className} ${
                    small ? `${className}--small-switch` : ''
                }`}
            >
                <input
                    type='checkbox'
                    name={name}
                    className={`${className}--checkbox`}
                    id={id}
                    checked={checked}
                    onChange={(e) => onChange && onChange(e.target.checked)}
                    disabled={disabled}
                />
                <label
                    className={`${className}--label ${
                        checked ? 'checked' : ''
                    }`}
                    tabIndex={disabled ? -1 : 1}
                    onKeyDown={(e) => handleKeyPress(e)}
                    htmlFor={id}
                >
                    {icon && !small ? (
                        <span
                            className={
                                disabled
                                    ? `${className}--inner ${className}--disabled`
                                    : `${className}--inner`
                            }
                            tabIndex={-1}
                        >
                            <div
                                className={`${className}--icon ${
                                    checked ? `${className}--icon-checked` : ''
                                }`}
                            >
                                <div className={`${className}--icon--yes`}>
                                    {icon.yes}
                                </div>
                                <div className={`${className}--icon--no`}>
                                    {icon.no}
                                </div>
                            </div>
                        </span>
                    ) : (
                        <span
                            className={
                                disabled
                                    ? `${className}--inner ${className}--disabled`
                                    : `${className}--inner`
                            }
                            data-yes={optionLabels.yes}
                            data-no={optionLabels.no}
                            tabIndex={-1}
                        />
                    )}
                    <span
                        className={
                            disabled
                                ? `${className}--switch ${className}--disabled ${
                                      checked
                                          ? `${className}--switch-checked`
                                          : ''
                                  }`
                                : `${className}--switch ${
                                      checked
                                          ? `${className}--switch-checked`
                                          : ''
                                  } `
                        }
                        tabIndex={-1}
                    />
                </label>
            </div>
        </div>
    );
};

export default SwitchButton;
