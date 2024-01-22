import {
    ADD_ITEM,
    CHANGE_ACTION_PRISE,
    CLEAR_FIELDS,
    DELET_ITEM,
    UPDATE_ITEM,
    INSERTING_ITEM_INTO_FORM,
    CHANGE_FILTER_VALUE,
} from './actionsName';

export const addItem = (actionField, priceField) => ({
    type: ADD_ITEM,
    payload: {
        actionField: actionField,
        priceField: priceField,
    },
});

export const deletItem = (id) => ({
    type: DELET_ITEM,
    payload: id,
});

export const updateItem = (id, actionField, priceField) => ({
    type: UPDATE_ITEM,
    payload: {
        id: id,
        actionField: actionField,
        priceField: priceField,
    },
});

export const changeForm = (name, value) => ({
    type: CHANGE_ACTION_PRISE,
    payload: {
        name,
        value,
    },
});

export const insertingIntoForm = (id, actionValue, priseValue) => ({
    type: INSERTING_ITEM_INTO_FORM,
    payload: {
        id,
        actionField: actionValue,
        priceField: priseValue,
    },
});

export const clearField = () => ({
    type: CLEAR_FIELDS,
});

export const filterChangeValue = (name, value) => ({
    type: CHANGE_FILTER_VALUE,
    payload: {
        name,
        value,
    },
});
