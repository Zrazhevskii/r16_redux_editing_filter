import React from 'react';

export const Item = ({ data }) => {
    // console.log(data)

    const { id, action, price } = data;

    return (
        <div className='item'>
            <li className='item-text'>
                {action} {price}
            </li>
            <button
                className='btn-change'
                // onClick={() => handleUpdateItem(id, action, price)}
            >
                ✎
            </button>
            <button className='btn-delet'>✘</button>
        </div>
    );
};
