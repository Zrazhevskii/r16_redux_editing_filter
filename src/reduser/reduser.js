import { ADD_ITEM } from '../actions/actionsName';

const initialState = [
    {
        id: '1',
        action: 'Замена стекла',
        price: 21000,
    },
    {
        id: '2',
        action: 'Замена дисплея',
        price: 25000,
    },
    {
        id: '3',
        action: 'Замена аккумулятора',
        price: 4000,
    },
    {
        id: '4',
        action: 'Замена микрофона',
        price: 2500,
    },
]


const reduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            const { ...text } = action.payload;

            return [
                ...state,
                {
                    id: crypto.randomUUID(),
                    action: text.actionValue,
                    price: parseInt(text.priseValue),
                },
            ];
        }
        case 'delet': {
            const id = action.payload;
            return state.filter((elem) => elem.id !== id);
        }

        case 'update': {
            const { ...text } = action.payload;
            const { id, actionValue, priseValue } = text;

            return state.map((elem) =>
                elem.id === id
                    ? {
                          id: id,
                          action: actionValue,
                          price: priseValue,
                      }
                    : elem
            );
        }
        default:
            return state;
    }
}

export default reduser;