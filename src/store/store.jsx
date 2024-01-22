import FormReducer from '../Reducers/FormReducer';
import ItemsReduser from '../Reducers/ItemsReducer';
import FilterReducer from '../Reducers/FilterReducer';

import { combineReducers, legacy_createStore } from 'redux';

const store = legacy_createStore(
    combineReducers({
        ItemsReduser: ItemsReduser,
        FormReducer: FormReducer,
        FilterReducer: FilterReducer,
    })
);

export default store;
