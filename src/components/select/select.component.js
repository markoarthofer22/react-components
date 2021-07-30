import React, { useState, useEffect, useRef } from "react";
import _ from "underscore";
import SvgIcon from "../svg-icon/svg-icon.component";
import "./select.scss";

const Select = ({ title, data, selectClass, placeholder, returnValue, isSearchable }) => {
    const [isOpen, setOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectData, setSelectData] = useState(data);
    const searchInput = useRef();
    const mainInput = useRef();

    useEffect(() => {
        setSelectedTitle(title);
    }, [title]);

    useEffect(() => {
        /* if (isOpen) {
            searchInput.current.focus();
        } */

        function handleClickOutside(e) {
            if (mainInput.current.contains(e.target)) {
                // inside click
                return;
            }
            // outside click
            setOpen(false);
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const toggleDropdown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpen(!isOpen);
    };

    const selectItem = (e, name, value, valueNumber) => {
        e.preventDefault();
        e.stopPropagation();
        setOpen(false);
        setSelectedTitle(name);
        returnValue(name, value, valueNumber);
    };

    const searchTroughSelectData = (e) => {
        if (e.target.value.length !== 0) {
            let searchPattern;
            if (e.target.value.charAt(0) === "+") {
                searchPattern = e.target.value.slice(1);
            } else {
                searchPattern = e.target.value;
            }
            let res = data.filter((item) => Object.keys(item).some((itemChild) => String(item[itemChild]).toLowerCase().includes(searchPattern.toLowerCase())));
            setSelectData(res ? res : []);
        } else {
            setSelectData(data);
        }
    };

    return (
        <div className={`select ${selectClass}`} ref={mainInput}>
            <div
                className={`select-header ${isOpen ? "open" : ""} `}
                onClick={(e) => {
                    toggleDropdown(e);
                }}
            >
                {selectedTitle ? <div className="selected-item-title">{selectedTitle ? selectedTitle : ""}</div> : <div className="placeholder">{placeholder ? placeholder : ""}</div>}
                <SvgIcon iconclass={`icon-swiper-arrow ${isOpen ? "open" : ""} `} icon="icon-swiper-arrow" />
            </div>
            <div className={`select-list ${isOpen ? "open" : ""}`}>
                {isSearchable && (
                    <input ref={searchInput} type="text" autoComplete="off" name="search-select" id="search-select" className="search-select" onChange={(e) => searchTroughSelectData(e)} />
                )}
                {selectData.map((item, index) => {
                    return (
                        <li
                            className="select-item"
                            key={index}
                            data-value={item.dialing_code}
                            onClick={(e) => {
                                selectItem(e, item.country, item.iso, item.dialing_code);
                            }}
                        >
                            {item.country}
                        </li>
                    );
                })}
            </div>
        </div>
    );
};

export default Select;
