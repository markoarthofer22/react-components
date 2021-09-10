import React from 'react';
import ListItemDefault from './listItemDefault/listItemDefault.component';
import './list.scss';

const List = (props) => {
    const { data, listItemComponent, listClass } = props;

    return (
        <div className={`list ${listClass ? listClass : ''}`}>
            {data.map((item, key) => {
                let TagName = listItemComponent
                    ? listItemComponent
                    : ListItemDefault;
                return (
                    <TagName
                        key={item.id ? item.id : key}
                        onClick={item.clicked ? item.clicked : null} //takes callback function, for now on click only
                        className={`list-item ${item.class ? item.class : ''}`}
                    >
                        {item.name}
                    </TagName>
                );
            })}
        </div>
    );
};

export default List;
