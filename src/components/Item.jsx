import { useDispatch } from 'react-redux';
import { deletItem, insertingIntoForm, clearField } from '../actions/actionsItems';
import PropTypes from 'prop-types';

export const Item = ({ data }) => {
    const dispatch = useDispatch();

    const { id, action, price } = data;

    const handleDeletItem = (id) => {
        dispatch(deletItem(id));
        dispatch(clearField());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleUpdateItem = (id, action, price) => {
        dispatch(insertingIntoForm(id, action, price));
    };

    return (
        <form className='item' onSubmit={handleSubmit}>
            <li className='item-text'>
                {action} {price}
            </li>
            <button
                className='btn-change'
                onClick={() => handleUpdateItem(id, action, price)}
            >
                ✎
            </button>
            <button className='btn-delet' onClick={() => handleDeletItem(id)}>
                ✘
            </button>
        </form>
    );
};

Item.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    }),
};
