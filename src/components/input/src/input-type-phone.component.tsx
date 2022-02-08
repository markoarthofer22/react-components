/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import _ from 'underscore';

import { useTheme } from '@emotion/react';
import { UseFormRegister, RegisterOptions } from 'react-hook-form';
import { InputStyles, InputPhoneStyles } from './styles';

import Select from '../../select/src';

export interface ICountriesProps {
    country: string;
    iso: string;
    dialing_code: string | number;
}

export interface IInputPhoneProps {
    hasWrapper?: boolean;
    id?: string;
    onBlur?: (e: any) => void;
    predefinedValue?: string;
    predefinedDialValue?: string;
    returnInputValue: (
        countriesID: string,
        countriesDial: string,
        countriesName: string,
        inputValue: string
    ) => void;
    required?: RegisterOptions;
    errorMessage?: { message?: string };
    register: UseFormRegister<any>;
    name: string;
    countriesList: ICountriesProps[];
    disableFocus?: boolean;
    labelText?: string;
    selectPlaceholder?: string;
    selectBindingValue?: string;
    className?: string;
}

export const InputTypePhone: React.FC<IInputPhoneProps & Record<string, any>> =
    ({
        id,
        onBlur,
        className = 'form-item-phone',
        predefinedValue,
        predefinedDialValue,
        returnInputValue,
        register,
        required,
        name,
        errorMessage,
        countriesList,
        disableFocus,
        labelText,
        selectPlaceholder,
        selectBindingValue,
        hasWrapper = true,
        ...rest
    }): JSX.Element => {
        const theme = useTheme();

        const [countriesID, setCountriesID] = useState<string>('');
        const [countriesName, setCountriesName] = useState<string>('');
        const [countriesDial, setCountriesDial] = useState<string>('');
        const [inputValue, setInputValue] = useState<string>('');

        const returnValueFromSelect = (data: any) => {
            setCountriesName(data.country);
            setCountriesID(data.iso);
            setCountriesDial(data.dialing_code);
        };

        const checkForCountryPhone = (countryID: string) => {
            if (countryID === undefined && countriesDial === undefined) {
                return;
            }

            if (countryID && countriesDial === undefined) {
                const country = _.find(
                    countriesList,
                    (item) => item.iso === countryID.toUpperCase()
                );

                if (country === undefined) return;

                setInputValue(`+${country.dialing_code}`);
                setCountriesName(country.country);
                setCountriesID(country.iso.toLowerCase());
                setCountriesDial(String(country.dialing_code));
                return;
            }

            setInputValue(`+${countriesDial}`);
        };

        useEffect(() => {
            if (predefinedValue && predefinedDialValue) return;

            checkForCountryPhone(countriesID);
        }, [countriesID]);

        useEffect(() => {
            if (inputValue) {
                if (!disableFocus) {
                    document.getElementById(`${id || 'countries'}`)?.focus();
                }
                if (returnInputValue) {
                    returnInputValue(
                        countriesID,
                        countriesDial,
                        countriesName,
                        inputValue
                    );
                }
            }
        }, [inputValue]);

        useEffect(() => {
            if (predefinedDialValue) {
                const country = _.find(
                    countriesList,
                    (item) => item.dialing_code === predefinedDialValue
                );

                if (!country) return;
                setCountriesID(country.iso);
                setCountriesName(country.country);
                setCountriesDial(String(country.dialing_code));
                setInputValue(predefinedValue || `+${country.dialing_code}`);
            }
        }, [predefinedValue, predefinedDialValue]);

        const setInput = (e: any): void => {
            if (countriesDial) {
                const stringLength = String(countriesDial).length + 1;

                if (
                    e.target.value.substring(1, stringLength) ===
                    String(countriesDial)
                ) {
                    setInputValue(e.target.value);
                } else {
                    setInputValue(`+${countriesDial}`);
                }
            } else {
                setInputValue(e.target.value);
            }
        };

        function returnInput() {
            return (
                <>
                    <label htmlFor={name} className={`${className}--name`}>
                        {labelText}
                    </label>
                    <div className={`${className}`}>
                        <Select
                            title={countriesName || null}
                            data={countriesList}
                            placeholder={
                                selectPlaceholder || 'Choose from list'
                            }
                            selectClass={`select--countries  ${
                                predefinedValue
                                    ? 'select--countries-disabled'
                                    : ''
                            }`}
                            returnValue={returnValueFromSelect}
                            isSearchable
                            bindingValue={selectBindingValue}
                        />
                        <div className='countries-input-holder'>
                            <input
                                disabled={Boolean(predefinedValue)}
                                type='text'
                                className={errorMessage && 'invalid'}
                                data-error={
                                    errorMessage && errorMessage.message
                                }
                                id={`${id || 'countries'}`}
                                required
                                value={inputValue}
                                autoComplete='off'
                                {...register(name, { ...required })}
                                {...rest}
                                onChange={(e) => setInput(e)}
                                onBlur={(e) => (onBlur ? onBlur(e) : null)}
                            />
                            <span
                                data-name={name}
                                data-error={
                                    errorMessage && errorMessage.message
                                }
                            />
                        </div>
                    </div>
                </>
            );
        }

        return hasWrapper ? (
            <div
                css={[InputStyles(theme), InputPhoneStyles(theme)]}
                className={`form-item-floating phone-type ${
                    errorMessage && 'invalid'
                }`}
            >
                {returnInput()}
            </div>
        ) : (
            returnInput()
        );
    };

export default InputTypePhone;
