/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { DropdownStyles } from './styles';

interface IData {
    value: string;
    id: string;
    link?: string;
}

interface IDropdownProps {
    data: IData[];
    dropdownClass?: string;
    placeholder?: string;
    label?: string;
    dropdownID: string;
    onChange?: (e?: any) => void;
    returnValue?: (data: IData) => void;
    isDefaultOpen?: boolean;
    defaultValue?: string;
}

const Dropdown: React.FC<IDropdownProps> = (props): JSX.Element => {
    const {
        data,
        dropdownClass,
        placeholder,
        label,
        dropdownID,
        onChange,
        isDefaultOpen = false,
        defaultValue,
        returnValue,
    } = props;

    const theme = useTheme();

    const [isOpen, setOpen] = useState<boolean>(isDefaultOpen);
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

    const checkIfSelected = (): void => {
        data.find((item) => {
            if (item.value === defaultValue) {
                setSelectedTitle(item.value);
            }
            return null;
        });
    };

    const toggleDropdown = (e: any): void => {
        e.preventDefault();
        e.stopPropagation();
        setOpen(!isOpen);
    };

    const selectItem = (e: any, item: IData): void => {
        e.stopPropagation();
        setOpen(false);
        setSelectedTitle(item.value);
        if (returnValue) returnValue(item);
    };

    useEffect(() => {
        if (!defaultValue) return;
        checkIfSelected();
    }, [defaultValue]);

    useEffect(() => {
        if (selectedTitle === null || !onChange) return;

        onChange();
    }, [selectedTitle]);

    return (
        <span css={DropdownStyles(theme)}>
            <div id={dropdownID} className={`dropdown ${dropdownClass}`}>
                {label && (
                    <label htmlFor={dropdownID} className='dropdown--label'>
                        {label}
                    </label>
                )}
                <div
                    role='button'
                    tabIndex={0}
                    className={`dropdown--header ${
                        isOpen ? 'dropdown--header-open' : ''
                    } `}
                    onClick={(e) => toggleDropdown(e)}
                >
                    {selectedTitle ? (
                        <div className='dropdown--header--title'>
                            {selectedTitle || ''}
                        </div>
                    ) : (
                        <div className='dropdown--header--placeholder'>
                            {placeholder || ''}
                        </div>
                    )}

                    <MdKeyboardArrowDown />
                </div>
                <div
                    className={`dropdown--list ${
                        isOpen ? 'dropdown--list-open' : ''
                    }`}
                >
                    {data.map((item) => {
                        const isPathURL: boolean =
                            item?.link?.substring(0, 1) === '/';

                        if (!item.link) {
                            return (
                                <li
                                    className='dropdown--item'
                                    key={item.id}
                                    onClick={(e) => {
                                        selectItem(e, item);
                                    }}
                                >
                                    {item.value}
                                </li>
                            );
                        }
                        if (isPathURL) {
                            return (
                                <Link key={item.id} to={item.link}>
                                    <li className='dropdown--item'>
                                        {item.value}
                                    </li>
                                </Link>
                            );
                        }
                        return (
                            <a
                                key={item.id}
                                href={item.link}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <li className='dropdown--item'>{item.value}</li>
                            </a>
                        );
                    })}
                </div>
            </div>
        </span>
    );
};

export default Dropdown;
