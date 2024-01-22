import { CHANGE_FILTER_VALUE } from '../actions/actionsName';

const initialState = {
    filterItems: [],
    valueFilter: '',
};

const FilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FILTER_VALUE: {
            const { name, value } = action.payload;
            //
            return {
                ...state,
                [name]: value,
            };
        }
        default:
            return state;
    }
};

export default FilterReducer;
