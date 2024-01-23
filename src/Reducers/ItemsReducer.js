import { ADD_ITEM, DELET_ITEM, UPDATE_ITEM } from '../actions/actionsName';

const initialState = [
    {
        id: '1',
        action: 'Замена стекла',
        price: '21000',
    },
    {
        id: '2',
        action: 'Замена дисплея',
        price: '25000',
    },
    {
        id: '3',
        action: 'Замена аккумулятора',
        price: '4000',
    },
    {
        id: '4',
        action: 'Замена микрофона',
        price: '2500',
    },
];

const ItemsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            const { actionField, priceField } = action.payload;

            return [
                ...state,
                {
                    id: crypto.randomUUID(),
                    action: actionField,
                    price: priceField,
                },
            ];
        }
        case DELET_ITEM: {
            const id = action.payload;
            return state.filter((elem) => elem.id !== id);
        }

        case UPDATE_ITEM: {
            const { id, actionField, priceField } = action.payload;
            return state.map((elem) =>
                elem.id === id
                    ? {
                          id: id,
                          action: actionField,
                          price: priceField,
                      }
                    : elem
            );
        }
        default:
            return state;
    }
};

export default ItemsReduser;
