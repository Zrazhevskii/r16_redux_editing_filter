import React from 'react';
import '../style/Form.css';

export const Filter = () => {
    
    return (
        <div className='form-filter'>
            <input
                type='text'
                className='filter'
                placeholder='поиск по словам'
                name='valueFilter'
            />
            <button className='btn-filter'>Найти</button>
        </div>
    );
};
