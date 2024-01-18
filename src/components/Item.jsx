import React from 'react';
import { useDispatch } from 'react-redux';
import { deletItem, insertingIntoForm, updateItem } from '../actions/actionsItems';

export const Item = ({ data }) => {
    // const item = useSelector((state) => state.ItemsReducer);
    const dispatch = useDispatch();

    const { id, action, price } = data;

    const handleDeletItem = (id) => {
        dispatch(deletItem(id))
    };

    const handleUpdateItem = () => {
        dispatch(insertingIntoForm(id, action, price))
    }

    return (
        <div className='item'>
            <li className='item-text'>
                {action} {price}
            </li>
            <button
                className='btn-change'
                onClick={() => handleUpdateItem(id, action, price)}
            >
                ✎
            </button>
            <button className='btn-delet' onClick={() => handleDeletItem(id)}>
                ✘
            </button>
        </div>
    );
};
