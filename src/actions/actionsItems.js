import { ADD_ITEM, DELET_ITEM, FILTER_ITEM, UPDATE_ITEM } from './actionsName';

export const addItem = (id, actionValue, priseValue) => ({
    type: ADD_ITEM,
    payload: {
        id: id,
        action: actionValue,
        price: priseValue,
    },
});

export const deletItem = (id) => ({
    type: DELET_ITEM,
    payload: id,
});

export const updateItem = (id, actionValue, priseValue) => ({
    type: UPDATE_ITEM,
    payload: {
        id: id,
        action: actionValue,
        price: priseValue,
    },
});

export const filterItem = (text) => ({
    type: FILTER_ITEM,
    payload: text,
})
