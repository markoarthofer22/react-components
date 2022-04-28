/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useTheme, css } from '@emotion/react';

import { UseFormRegister, RegisterOptions } from 'react-hook-form';

import { MdRemoveRedEye } from 'react-icons/md';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';

import Tooltip from '../../tooltip/src/index';
import { InputStyles, InputRadioStyles, InputCheckboxStyles } from './styles';

export interface IInputProps {
    hasWrapper?: boolean;
    type?: string;
    name: string;
    inputClass?: string;
    className?: string;
    required?: RegisterOptions;
    errorMessage?: { message?: string };
    register: UseFormRegister<any>;
    labelText?: string;
    onEveryChange?: (e?: any) => void;
    inputValue?: string;
    tooltip?: string;
    disabled?: boolean;
    icon?: React.ElementType | React.ComponentType;
    id?: string;
    checked?: boolean;
    enableShowPassword?: boolean;
    checkboxIcon?: React.ElementType | React.ComponentType;
}

export const InputComponent: React.FC<IInputProps & Record<string, any>> = ({
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
    icon,
    checkboxIcon,
    id,
    checked = false,
    enableShowPassword = false,
    ...rest
}): JSX.Element => {
    const theme = useTheme();
    const C = icon || MdRemoveRedEye;
    const ChecboxIcon = checkboxIcon || IoCheckmarkDoneOutline;
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

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

    React.useEffect(() => {
        if (!checked) return;

        document.querySelector<HTMLInputElement>(
            `input[type='${type}'][id='${id}']`
        )!.checked = true;
    }, []);

    function returnInput() {
        return (
            <>
                <input
                    id={id}
                    type={showPassword ? 'text' : type}
                    disabled={disabled}
                    required
                    autoComplete='0'
                    className={`${inputClass || 'input-default'} ${
                        errorMessage && 'invalid'
                    }`}
                    data-error={errorMessage ? errorMessage.message : undefined}
                    value={inputValue && inputValue.toString()}
                    onKeyUp={(e) => {
                        onEveryChange && onEveryChange(e);
                    }}
                    {...register(name, { ...required })}
                    {...rest}
                />
                <label
                    htmlFor={name}
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

                {enableShowPassword && (
                    <span onClick={() => setShowPassword(!showPassword)}>
                        <C className='password-svg' />
                    </span>
                )}

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
