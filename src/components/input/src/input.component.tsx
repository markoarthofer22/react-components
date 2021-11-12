/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

import {
    FieldError,
    FieldValues,
    NestDataObject,
} from 'react-hook-form/dist/types';
import { MdRemoveRedEye } from 'react-icons/md';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import { useTheme, css } from '@emotion/react';
import Tooltip from '@markoarthofer22/react-components.tooltip';
import { RegisterOptions } from './validation.types';
import { InputStyles, InputRadioStyles, InputCheckboxStyles } from './styles';

// component

interface IInputProps {
    hasWrapper?: boolean;
    type?: string;
    name?: string | null;
    inputClass?: string;
    className?: string;
    required: RegisterOptions;
    errorMessage?: NestDataObject<FieldValues, FieldError>;
    register?: any;
    labelText?: string;
    onEveryChange: (e: any) => void;
    inputValue?: string;
    tooltip?: string;
    disabled?: boolean;
    showIcon?: boolean;
    icon?: React.ElementType | React.ComponentType;
    id?: string;
    checked?: boolean;
    checkboxIcon?: React.ElementType | React.ComponentType;
}

const InputComponent: React.FC<IInputProps> = ({
    hasWrapper = true,
    type = 'text',
    name,
    inputClass,
    className = 'form-item-floating',
    required,
    errorMessage,
    register,
    labelText,
    onEveryChange,
    inputValue,
    tooltip,
    disabled = false,
    showIcon = false,
    icon,
    checkboxIcon,
    id,
    checked = false,
}): JSX.Element => {
    const theme = useTheme();
    const C = icon || MdRemoveRedEye;
    const ChecboxIcon = checkboxIcon || IoCheckmarkDoneOutline;
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    const getInputStyles = (_type: string) => {
        let value;

        switch (_type) {
            case 'radio':
                value = css([InputStyles(theme), InputRadioStyles(theme)]);
                break;

            case 'checkbox':
                value = css([InputStyles(theme), InputCheckboxStyles(theme)]);
                break;

            default:
                value = css(InputStyles(theme));
                break;
        }

        return value;
    };

    function returnInput() {
        return (
            <>
                <input
                    id={id}
                    type={type}
                    disabled={disabled}
                    required
                    checked={isChecked}
                    name={name || undefined}
                    autoComplete='0'
                    className={`${inputClass || 'input-default'} ${
                        errorMessage && 'invalid'
                    }`}
                    data-error={errorMessage ? errorMessage.message : undefined}
                    value={inputValue && inputValue.toString()}
                    ref={register ? register({ ...required }) : null}
                    onChange={(e) => {
                        onEveryChange && onEveryChange(e);
                        setIsChecked(!isChecked);
                    }}
                />
                <label
                    htmlFor={name || undefined}
                    className={`floating-label ${tooltip ? 'flexed' : ''}`}
                >
                    {labelText}
                    {tooltip && (
                        <Tooltip title={tooltip} className='custom-tooltip' />
                    )}
                    {type === 'checkbox' && (
                        <ChecboxIcon className='checkbox-svg' />
                    )}
                </label>

                {showIcon && <C />}

                {errorMessage && (
                    <span
                        data-name={name || undefined}
                        data-error={errorMessage && errorMessage.message}
                    />
                )}
            </>
        );
    }

    return hasWrapper ? (
        <div
            css={getInputStyles(type)}
            className={`${className} ${
                (type === 'radio' || type === 'checkbox') && 'mb-0'
            } ${type === 'radio' && `${className}--radio`} ${
                type === 'checkbox' && `${className}--checkbox`
            } ${errorMessage && 'invalid'}`}
        >
            {returnInput()}
        </div>
    ) : (
        returnInput()
    );
};

export default InputComponent;
