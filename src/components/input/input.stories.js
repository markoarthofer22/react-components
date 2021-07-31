import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { useForm } from 'react-hook-form';

import InputComponent from './input.component';

storiesOf(`Components/Inputs`)
    .addDecorator(withKnobs)
    .add('Email input with validation', () => {
        const { register, errors } = useForm({
            mode: 'onChange',
            reValidateMode: 'onSubmit',
        });

        return (
            <div
                style={{ maxWidth: '400px', width: '100%', marginTop: '20px' }}
            >
                <div className='form-item-container single'>
                    <div
                        className={`form-item-floating ${
                            errors.email && 'invalid'
                        }`}
                    >
                        <InputComponent
                            name='email'
                            labelText='Email'
                            errorMessage={errors.email}
                            register={register}
                            required={{
                                required: 'Ovo polje je obavezno',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message:
                                        'Molimo unesite valjanu e-mail adresu!',
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    });
