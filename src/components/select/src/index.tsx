/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { MdExpandMore } from 'react-icons/md';
import { useTheme } from '@emotion/react';
import { SelectStyles } from './styles';

export interface ISelectProps {
    title?: string | null;
    data: any[];
    selectClass?: string;
    placeholder?: string;
    returnValue: (data: any) => void;
    isSearchable?: boolean;
    bindingValue?: string;
    className?: string;
}

export const Select: React.FC<ISelectProps> = ({
    title,
    data,
    selectClass,
    placeholder,
    returnValue,
    isSearchable = true,
    bindingValue,
    className = 'select',
}): JSX.Element => {
    const theme = useTheme();

    const [isOpen, setOpen] = React.useState<boolean>(false);
    const [selectedTitle, setSelectedTitle] = React.useState<
        string | undefined
    >('');
    const [selectData, setSelectData] = React.useState<any[]>(data);

    const searchInput = React.useRef<HTMLInputElement | null>(null);
    const mainInput = React.useRef<HTMLInputElement | null>(null);

    React.useEffect(() => {
        if (!title) return;
        setSelectedTitle(title);
    }, [title]);

    React.useLayoutEffect(() => {
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
        <div
            css={SelectStyles(theme)}
            className={`${className} ${selectClass}`}
            ref={mainInput}
        >
            <div
                className={`${className}--header ${
                    isOpen ? `${className}--header-open` : ''
                } `}
                onClick={(e) => {
                    toggleDropdown(e);
                }}
            >
                {selectedTitle ? (
                    <div className={`${className}--header--title`}>
                        {selectedTitle || ''}
                    </div>
                ) : (
                    <div className={`${className}--header--placeholder`}>
                        {placeholder || ''}
                    </div>
                )}
                <MdExpandMore />
            </div>
            <div
                className={`${className}--list ${
                    isOpen ? `${className}--list-open` : ''
                }`}
            >
                {isSearchable && (
                    <input
                        ref={searchInput}
                        type='text'
                        autoComplete='off'
                        name='search-select'
                        id='search-select'
                        className={`${className}--list--search`}
                        onChange={(e) => searchTroughSelectData(e)}
                    />
                )}
                {selectData.map((item, index) => (
                    <li
                        className={`${className}--item`}
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
