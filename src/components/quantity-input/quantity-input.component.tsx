import React, { useEffect, useState } from 'react';

interface QuantityProps {
    onChange: (e: any) => void;
    maxValue?: string;
    defaultValue?: string;
}

const QuantityInput: React.FC<QuantityProps> = ({
    onChange,
    maxValue = '99',
    defaultValue = '0',
}) => {
    const max = parseInt(maxValue, 10);
    const checkDefaultValue =
        Number(defaultValue) < 0
            ? '0'
            : Number(defaultValue) >= max
            ? maxValue
            : String(parseInt(defaultValue, 10));

    const [value, setValue] = useState<string>(checkDefaultValue);

    const increment = (): void => {
        if (Number(value) >= max) {
            setValue(maxValue);
            return;
        }

        setValue((prevCount) => String(Number(prevCount) + 1));
    };

    const decrement = (): void => {
        if (Number(value) === 0) return;

        setValue((prevCount) => String(Number(prevCount) - 1));
    };

    const onBlurChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const val = parseInt(e.target.value, 10);

        if (val >= max) {
            setValue(maxValue);
            return;
        }

        if (isNaN(val)) {
            setValue('0');
            return;
        }
        setValue(val.toString());
    };

    useEffect(() => {
        if (Number(value) >= max) {
            onChange(maxValue);
            return;
        }

        if (Number(value) <= 0) {
            onChange(0);
            return;
        }

        onChange(value);
    }, [value]);

    return (
        <div className='quantity-input' onClick={(e) => e.stopPropagation()}>
            <button
                className='quantity-input--decrement'
                onClick={decrement}
                type='button'
            >
                -
            </button>
            <input
                className='quantity-input--input'
                type='text'
                value={value}
                onFocus={() => setValue('')}
                onBlur={onBlurChange}
                onChange={(e): void => {
                    setValue(e.target.value === '' ? '0' : e.target.value);
                }}
            />
            <button
                className='quantity-input--increment'
                onClick={increment}
                type='button'
            >
                +
            </button>
        </div>
    );
};

export default QuantityInput;
