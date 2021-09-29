import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { MdExpandMore } from 'react-icons/md';

interface SelectProps {
    title?: string | null;
    data: any[];
    selectClass?: string;
    placeholder?: string;
    returnValue: (data: any) => void;
    isSearchable?: boolean;
    bindingValue?: string;
}

const Select: React.FC<SelectProps> = ({
    title,
    data,
    selectClass,
    placeholder,
    returnValue,
    isSearchable,
    bindingValue,
}): JSX.Element => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [selectedTitle, setSelectedTitle] = useState<string | undefined>('');
    const [selectData, setSelectData] = useState<any[]>(data);

    const searchInput = useRef<HTMLInputElement | null>(null);
    const mainInput = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!title) return;
        setSelectedTitle(title);
    }, [title]);

    useLayoutEffect(() => {
        function handleClickOutside(e: any) {
            if (mainInput.current === null) return;

            if (mainInput.current.contains(e.target)) {
                return;
            }
            setOpen(false);
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const toggleDropdown = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setOpen(!isOpen);
    };

    const selectItem = (
        e: React.MouseEvent,
        item: {
            [key: string]: string;
        }
    ) => {
        e.preventDefault();
        e.stopPropagation();
        setOpen(false);
        setSelectedTitle(item[bindingValue || 'name']);
        returnValue(item);
    };

    const searchTroughSelectData = (e: any) => {
        if (e.target.value.length !== 0) {
            let searchPattern: string;
            if (e.target.value.charAt(0) === '+') {
                searchPattern = e.target.value.slice(1);
            } else {
                searchPattern = e.target.value;
            }
            const res = data.filter((item: any) =>
                Object.keys(item).some((itemChild: string) =>
                    item[itemChild]
                        .toLowerCase()
                        .includes(searchPattern.toLowerCase())
                )
            );
            setSelectData(res || []);
        } else {
            setSelectData(data);
        }
    };

    return (
        <div className={`select ${selectClass}`} ref={mainInput}>
            <div
                className={`select--header ${
                    isOpen ? 'select--header-open' : ''
                } `}
                onClick={(e) => {
                    toggleDropdown(e);
                }}
            >
                {selectedTitle ? (
                    <div className='select--header--title'>
                        {selectedTitle || ''}
                    </div>
                ) : (
                    <div className='select--header--placeholder'>
                        {placeholder || ''}
                    </div>
                )}
                <MdExpandMore />
            </div>
            <div
                className={`select--list ${isOpen ? 'select--list-open' : ''}`}
            >
                {isSearchable && (
                    <input
                        ref={searchInput}
                        type='text'
                        autoComplete='off'
                        name='search-select'
                        id='search-select'
                        className='select--list--search'
                        onChange={(e) => searchTroughSelectData(e)}
                    />
                )}
                {selectData.map((item, index) => (
                    <li
                        className='select--item'
                        key={index}
                        data-value={item[bindingValue || 'value']}
                        onClick={(e) => {
                            selectItem(e, item);
                        }}
                    >
                        {item[bindingValue || 'value']}
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Select;
