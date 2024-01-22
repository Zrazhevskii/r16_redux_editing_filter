import { useDispatch } from 'react-redux';
import { deletItem, insertingIntoForm } from '../actions/actionsItems';
import PropTypes from 'prop-types';

export const Item = ({ data }) => {
    const dispatch = useDispatch();

    const { id, action, price } = data;

    const handleDeletItem = (id) => {
        dispatch(deletItem(id));
    };

    const handleUpdateItem = () => {
        dispatch(insertingIntoForm(id, action, price));
    };

    return (
        <div className='item'>
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
        </div>
    );
};

Item.propTypes = {
    data : PropTypes.shape({
        id : PropTypes.string.isRequired,
        action : PropTypes.string.isRequired,
        price : PropTypes.number.isRequired,
    }),
    
}
