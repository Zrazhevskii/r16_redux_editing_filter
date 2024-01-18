import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../style/items.css';
import { Item } from './Item';

export const Items = () => {
    const items = useSelector((state) => state.ItemsReduser);
    // const dispatch = useDispatch();

    return (
        <div className='items-wrapper'>
            <ul className='item-list'>
                {items.map((elem) => {
                    return <Item data={elem} key={elem.id} />;
                })}
            </ul>
        </div>
    );
};
