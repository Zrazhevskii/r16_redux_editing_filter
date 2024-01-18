import {
    CHANGE_ACTION_PRISE,
    CLEAR_FIELDS,
    INSERTING_ITEM_INTO_FORM,
} from '../actions/actionsName';

const initialState = {
    id: '',
    actionField: '',
    priceField: '',
};

const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ACTION_PRISE: {
            const { name, value } = action.payload;
            return {
                ...state,
                [name]: value,
            };
        }

        case INSERTING_ITEM_INTO_FORM: {
            // console.log(action.payload);
            const { id, actionField, priceField } = action.payload;

            state = {
                id,
                actionField,
                priceField,
            };

            return state;
        }

        case CLEAR_FIELDS: {
            return initialState;
        }

        default:
            return state;
    }
};

export default FormReducer;
