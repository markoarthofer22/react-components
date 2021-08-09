import React, { useEffect, useState } from 'react';
import './quantity.styles.scss';

const Quantity = ({ onChange, limitMax }) => {
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(prevCount => parseInt(prevCount) + 1);
    };

    const decrement = () => {
        if (value === 0) return;
        setValue(prevCount => parseInt(prevCount) - 1);
    };

    useEffect(() => {
        onChange(value);
    }, [value]);

    return (
        <div className="quantity-input" onClick={e => e.stopPropagation()}>
            <button aria-label="increse" className="dec" onClick={decrement}>
                -
            </button>
            <input
                className="input"
                type="text"
                value={value}
                onChange={e => setValue(isNaN(e.target.value) || e.target.value === '' ? 0 : e.target.value)}
            />
            <button aria-label="decrese" className="inc" onClick={increment}>
                +
            </button>
        </div>
    );
};

export default Quantity;
