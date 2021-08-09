import React from "react";

const ListItemDefault = props => {
    const { className, onClick } = props;

    return (
        <div className={className} onClick={onClick}>
            {props.children}
        </div>
    );
};

export default ListItemDefault;
