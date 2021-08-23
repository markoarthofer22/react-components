import React from 'react';

import {
    FieldError,
    FieldValues,
    NestDataObject,
} from 'react-hook-form/dist/types';

// component
import { MdRemoveRedEye } from 'react-icons/md';
import Tooltip from '../tooltip/tooltip.component';

export interface SearchBarValidatorObj {
    required: boolean;
    k: KeyObjectValidator;
}

interface KeyObjectValidator {
    value: string | number;
    message: string;
}

interface InputProps {
    hasWrapper?: boolean;
    type?: string;
    name?: string | null;
    inputClass?: string;
    required: SearchBarValidatorObj;
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
}

const InputComponent: React.FC<InputProps> = ({
    hasWrapper = true,
    type,
    name,
    inputClass,
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
    id,
}): JSX.Element => {
    const C = icon || MdRemoveRedEye;

    function returnInput() {
        return (
            <>
                <input
                    id={id}
                    type={type || 'text'}
                    disabled={disabled}
                    required
                    name={name || undefined}
                    autoComplete='0'
                    className={`${inputClass || 'input-default'} ${
                        errorMessage && 'invalid'
                    }`}
                    data-error={errorMessage ? errorMessage.message : undefined}
                    value={inputValue && inputValue.toString()}
                    ref={register ? register({ ...required }) : null}
                    onChange={(e) => (onEveryChange ? onEveryChange(e) : null)}
                />
                <label
                    htmlFor={name || undefined}
                    className={`floating-label ${tooltip ? 'flexed' : ''}`}
                >
                    {labelText}
                    {tooltip && (
                        <Tooltip title={tooltip} customClass='custom-tooltip' />
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
            className={`form-item-floating ${
                (type === 'radio' || type === 'checkbox') && 'mb-0'
            }  ${errorMessage && 'invalid'}`}
        >
            {returnInput()}
        </div>
    ) : (
        returnInput()
    );
};

export default InputComponent;
