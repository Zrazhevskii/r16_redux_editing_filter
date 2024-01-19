import React from 'react';
import { Filter } from './Filter';
import { useSelector, useDispatch } from 'react-redux';
import '../style/Form.css';
import {
    addItem,
    changeForm,
    clearField,
    updateItem,
} from '../actions/actionsItems';

export const Form = () => {
    const formField = useSelector((state) => state.FormReducer);
    const dispatch = useDispatch();

    const { id, actionField, priceField } = formField;

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        dispatch(changeForm(name, value));
    };

    const handleAddItem = (e) => {
        e.preventDefault();

        if (!id) {
            dispatch(addItem(actionField, priceField));
            dispatch(clearField());
            return;
        }

        dispatch(updateItem(id, actionField, priceField));
        dispatch(clearField());
    };

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
                            name='actionField'
                            value={actionField}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input prise'>
                        <label htmlFor='prise'>Сколько стоит</label>
                        <input
                            type='text'
                            id='prise'
                            className='text'
                            placeholder='тут самое важно, что бьет по карману'
                            name='priceField'
                            value={priceField}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='btn-box'>
                        <button
                            className='btn save'
                            type='submit'
                            onClick={handleAddItem}
                        >
                            Save
                        </button>
                        <button className='btn cansel'>Cansel</button>
                    </div>
                </div>
                <Filter />
            </form>
        </div>
    );
};
