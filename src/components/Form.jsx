import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../style/Form.css'

export const Form = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <form action='' className='form-wrapper'>
                <div className='form-input'>
                    <div className='input action'>
                        <label htmlFor='action'>Мероприятие</label>
                        <input
                            type='text'
                            id='action'
                            className='text'
                            placeholder='текст того, что надо сделать'
                            name='actionValue'
                        />
                    </div>
                    <div className='input prise'>
                        <label htmlFor='prise'>Сколько стоит</label>
                        <input
                            type='text'
                            id='prise'
                            className='text'
                            placeholder='тут самое важно, что бьет по карману'
                            name='priseValue'
                        />
                    </div>
                    <div className='btn-box'>
                        <button className='btn save'>Save</button>
                        <button className='btn cansel'>Cansel</button>
                    </div>
                </div>
                <div className='form-filter'>
                    <input
                        type='text'
                        className='filter'
                        placeholder='поиск по словам'
                        name='valueFilter'
                    />
                    <button className='btn-filter'>Найти</button>
                </div>
            </form>
        </div>
    );
};
