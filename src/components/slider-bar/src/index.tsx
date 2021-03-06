/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useTheme } from '@emotion/react';
import { SliderbarStyles } from './styles';

export interface ISliderBarProps {
    className?: string;
    initialValue: number;
    min?: number;
    max?: number;
    formatFn?: (val: any) => any;
    onChange?: (e: any) => any;
}

export const SliderBar: React.FC<ISliderBarProps> = ({
    initialValue,
    min = 0,
    className = 'slider-bar',
    max = 100,
    formatFn = (number) => number.toFixed(0),
    onChange,
}): JSX.Element => {
    const theme = useTheme();

    const getPercentage = (
        _current: number,
        _min: number,
        _max: number
    ): number => ((_current - _min) / (_max - _min)) * 100;

    const getValue = (
        _percentage: number,
        _min: number,
        _max: number
    ): number => ((_max - _min) / 100) * _percentage + min;

    const getLeft = (_percentage: string | number): string =>
        `calc(${_percentage}% - 5px)`;

    const getWidth = (_percentage: string | number): string =>
        `${_percentage}%`;

    const initialPercentage = getPercentage(initialValue, min, max);

    const rangeRef = React.useRef<HTMLDivElement>(null!);
    const rangeProgressRef = React.useRef<HTMLDivElement>(null!);
    const thumbRef = React.useRef<HTMLDivElement>(null!);
    const currentRef = React.useRef<HTMLDivElement>(null!);

    const diff = React.useRef<number>(null!);

    const handleUpdate = React.useCallback(
        (value, percentage) => {
            thumbRef.current.style.left = getLeft(percentage);
            rangeProgressRef.current.style.width = getWidth(percentage);
            currentRef.current.textContent = formatFn(value);
        },
        [formatFn]
    );

    const handleMouseMove = (event: any): void => {
        let newX =
            event.clientX -
            diff.current -
            rangeRef.current.getBoundingClientRect().left;

        const end = rangeRef.current.offsetWidth - thumbRef.current.offsetWidth;

        const start = 0;

        if (newX < start) newX = 0;
        if (newX > end) newX = end;

        const newPercentage = getPercentage(newX, start, end);
        const newValue = getValue(newPercentage, min, max);

        handleUpdate(newValue, newPercentage);

        if (onChange) onChange(newValue);
    };

    const handleMouseUp = (): void => {
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mousemove', handleMouseMove);
    };

    const handleMouseDown = (event: any): void => {
        diff.current =
            event.clientX - thumbRef.current.getBoundingClientRect().left;

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    React.useLayoutEffect(() => {
        handleUpdate(initialValue, initialPercentage);
    }, [initialValue, initialPercentage, handleUpdate]);

    return (
        <div css={SliderbarStyles(theme)} className={`${className}`}>
            <div className={`${className}--header`}>
                <div>{formatFn(min)}</div>
                <div>{formatFn(max)}</div>
            </div>
            <div className={`${className}--slider`} ref={rangeRef}>
                <div
                    className={`${className}--progress`}
                    ref={rangeProgressRef}
                />
                <div
                    className={`${className}--thumb`}
                    ref={thumbRef}
                    onMouseDown={handleMouseDown}
                />
            </div>
            <p ref={currentRef} className={`${className}--value`} />
        </div>
    );
};

export default SliderBar;
