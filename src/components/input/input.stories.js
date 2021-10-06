import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, optionsKnob } from '@storybook/addon-knobs';
import { useForm } from 'react-hook-form';

import GlobalThemeProvider from '../../themes/global-theme.provider';
import InputComponent from './input.component';
import InputTypePhone from './input-type-phone.component';

const Warning = () => (
    <p style={{ marginBottom: 20, fontSize: 13 }}>
        If you want to inline them use{' '}
        <span style={{ color: 'red', display: 'block' }}>
            {String("<div className='form-item-container'></div>")}
        </span>
        <br />
        If you want them displayed block add class{' '}
        <span style={{ color: 'red' }}>"single"</span> to wrapper
    </p>
);

storiesOf(`Designs/Atoms/Inputs`, module)
    .addDecorator(withKnobs)
    .add('Default inputs', () => {
        const { register, errors } = useForm({
            mode: 'onChange',
            reValidateMode: 'onSubmit',
        });

        return (
            <GlobalThemeProvider>
                <div
                    style={{
                        maxWidth: '400px',
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <Warning />
                    <div className='form-item-container single'>
                        <InputComponent
                            name='name'
                            labelText='Default input with validation'
                            errorMessage={errors.name}
                            register={register}
                            required={{
                                required: 'Custom message',
                            }}
                        />
                    </div>
                    <div className='form-item-container single'>
                        <InputComponent
                            name='email'
                            labelText='Email'
                            errorMessage={errors.email}
                            register={register}
                            required={{
                                required: 'This field is required',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message:
                                        'Please enter email in correct format',
                                },
                            }}
                        />
                    </div>
                    <div className='form-item-container single'>
                        <InputComponent
                            name='zip'
                            labelText='Postal'
                            errorMessage={errors.zip}
                            register={register}
                            required={{
                                required: 'This field is required',
                                maxLength: {
                                    value: 10,
                                    message: '10 chars max',
                                },
                            }}
                        />
                    </div>
                </div>
            </GlobalThemeProvider>
        );
    })
    .add('Checkbox', () => {
        const { register, errors } = useForm({
            mode: 'onChange',
            reValidateMode: 'onSubmit',
        });

        return (
            <GlobalThemeProvider>
                <div
                    className='form-item-container single checkbox-single'
                    style={{ width: 'fit-content' }}
                >
                    <div
                        className={`form-item-floating ${
                            errors.checkboxExample && 'invalid'
                        }`}
                    >
                        <InputComponent
                            type='checkbox'
                            inputValue='agree'
                            name='checkboxExample'
                            labelText='Officia cillum aute magna in est nostrud dolore ullamco excepteur in mollit id.'
                            errorMessage={errors.checkboxExample}
                            register={register}
                            required={{
                                required: 'This field is required',
                            }}
                        />
                    </div>
                </div>
            </GlobalThemeProvider>
        );
    })
    .add('Radio', () => {
        const { register, errors } = useForm({
            mode: 'onChange',
            reValidateMode: 'onSubmit',
        });

        return (
            <GlobalThemeProvider>
                <div
                    className={`form-item-container single radio-single ${optionsKnob(
                        'Display inline (add class inline)',
                        {
                            False: '',
                            True: 'inline',
                        },
                        '',
                        { display: 'inline-radio' }
                    )} `}
                >
                    <InputComponent
                        type='radio'
                        id='val1'
                        inputValue='value1'
                        name='radioExample'
                        labelText='value1'
                        errorMessage={errors.radioExample}
                        register={register}
                        required={{
                            required: 'This field is required',
                        }}
                    />

                    <InputComponent
                        type='radio'
                        id='val2'
                        inputValue='value2'
                        name='radioExample'
                        labelText='value2'
                        errorMessage={errors.radioExample}
                        register={register}
                        required={{
                            required: 'This field is required',
                        }}
                    />
                </div>
            </GlobalThemeProvider>
        );
    })
    .add('Phone input', () => {
        const { register, errors } = useForm({
            mode: 'onChange',
            reValidateMode: 'onSubmit',
        });

        const countries = [
            { country: 'Afghanistan', dialing_code: 93, iso: 'AF' },
            { country: 'Albania', dialing_code: 355, iso: 'AL' },
            { country: 'Algeria', dialing_code: 213, iso: 'DZ' },
            { country: 'American Samoa', dialing_code: 1684, iso: 'AS' },
            { country: 'Andorra', dialing_code: 376, iso: 'AD' },
            { country: 'Angola', dialing_code: 244, iso: 'AO' },
            { country: 'Anguilla', dialing_code: 1, iso: 'AI' },
            { country: 'Antarctica', dialing_code: 672, iso: 'AQ' },
            { country: 'Antigua and Barbuda', dialing_code: 1, iso: 'AG' },
            { country: 'Argentina', dialing_code: 54, iso: 'AR' },
            { country: 'Armenia', dialing_code: 374, iso: 'AM' },
            { country: 'Aruba', dialing_code: 297, iso: 'AW' },
            { country: 'Australia', dialing_code: 61, iso: 'AU' },
            { country: 'Austria', dialing_code: 43, iso: 'AT' },
            { country: 'Azerbaijan', dialing_code: 994, iso: 'AZ' },
            { country: 'Bahamas', dialing_code: 1, iso: 'BS' },
            { country: 'Bahrain', dialing_code: 973, iso: 'BH' },
            { country: 'Bali', dialing_code: 62, iso: 'ID' },
            { country: 'Bangladesh', dialing_code: 880, iso: 'BD' },
            { country: 'Barbados', dialing_code: 1, iso: 'BB' },
            { country: 'Belarus', dialing_code: 375, iso: 'BY' },
            { country: 'Belgium', dialing_code: 32, iso: 'BE' },
            { country: 'Belize', dialing_code: 501, iso: 'BZ' },
            { country: 'Benin', dialing_code: 229, iso: 'BJ' },
            { country: 'Bermuda', dialing_code: 1, iso: 'BM' },
        ];

        const returnInputValue = (
            countryID,
            countryDial,
            countryName,
            value
        ) => {
            const vals = {
                countryID,
                countryDial,
                countryName,
                value,
            };

            // eslint-disable-next-line no-console
            console.log('Returned values from input :>> ', vals);
        };

        return (
            <GlobalThemeProvider>
                <div
                    style={{
                        maxWidth: '400px',
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <div className='form-item-container single'>
                        <InputTypePhone
                            countriesList={countries}
                            selectBindingValue={'iso'}
                            predefinedDialValue='385'
                            returnInputValue={returnInputValue}
                            name='phone'
                            errorMessage={errors.phone}
                            register={register}
                            required={{
                                required: 'Please enter you phone number',
                                pattern: {
                                    value: /^[+\d]?(?:[\d-.\s()]*)$/,
                                    message: 'Use only numeric values!',
                                },
                            }}
                        />
                    </div>
                </div>
            </GlobalThemeProvider>
        );
    });
