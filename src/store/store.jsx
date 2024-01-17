import ItemsReduser from '../Redusers/ItemsReduser';

import { combineReducers, legacy_createStore } from 'redux';

const store = legacy_createStore(
    combineReducers({
        ItemsReduser: ItemsReduser,
    })
);

export default store;
