/* eslint-disable no-unused-vars */
import React from 'react';

import {
    FieldError,
    FieldValues,
    NestDataObject,
} from 'react-hook-form/dist/types';

// component
// import Tooltip from '../tooltip/tooltip.component';
// import SvgIcon from '../svg-icon/svg-icon.component';

export interface SearchBarValidatorObj {
    required: boolean;
    k: KeyObjectValidator;
}

interface KeyObjectValidator {
    value: string | number;
    message: string;
}

interface InputProps {
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
    showPasswordIcon?: boolean;
    showIcon?: boolean | string;
}

const InputComponent: React.FC<InputProps> = ({
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
    disabled,
    // showIcon,
}): JSX.Element => {
    console.log(errorMessage);

    return (
        <>
            <input
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
                {labelText}{' '}
                {/* {tooltip && <Tooltip title={tooltip} styles='custom-tooltip' />} */}
            </label>

            {/* {showIcon && <SvgIcon icon={showIcon} />} */}

            {errorMessage && (
                <span
                    data-name={name || undefined}
                    data-error={errorMessage && errorMessage.message}
                />
            )}
        </>
    );
};

export default InputComponent;
