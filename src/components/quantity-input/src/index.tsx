/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useTheme } from '@emotion/react';
import { QuantityInputStyles } from './styles';

export interface IQuantityProps {
    onChange: (e: any) => void;
    maxValue?: string;
    defaultValue?: string;
    className?: string;
}

export const QuantityInput: React.FC<IQuantityProps> = ({
    onChange,
    maxValue = '99',
    defaultValue = '0',
    className = 'quantity-input',
}) => {
    const max = parseInt(maxValue, 10);
    const theme = useTheme();

    const checkDefaultValue =
        Number(defaultValue) < 0
            ? '0'
            : Number(defaultValue) >= max
            ? maxValue
            : String(parseInt(defaultValue, 10));

    const [value, setValue] = React.useState<string>(checkDefaultValue);

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

    React.useEffect(() => {
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
        <div
            className={`${className}`}
            css={QuantityInputStyles(theme)}
            onClick={(e) => e.stopPropagation()}
        >
            <button
                className={`${className}--decrement`}
                onClick={decrement}
                type='button'
            >
                -
            </button>
            <input
                className={`${className}--input`}
                type='text'
                value={value}
                onFocus={() => setValue('')}
                onBlur={onBlurChange}
                onChange={(e): void => {
                    setValue(e.target.value === '' ? '0' : e.target.value);
                }}
            />
            <button
                className={`${className}--increment`}
                onClick={increment}
                type='button'
            >
                +
            </button>
        </div>
    );
};

export default QuantityInput;
