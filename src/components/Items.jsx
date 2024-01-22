import '../style/items.css';
import { Item } from './Item';
import PropTypes from 'prop-types';

export const Items = ({ props }) => {
    return (
        <div className='items-wrapper'>
            <ul className='item-list'>
                {props.map((elem) => {
                    return <Item data={elem} key={elem.id} />;
                })}
            </ul>
        </div>
    );
};

Items.propTypes = {
    props : PropTypes.shape({
        id : PropTypes.string.isRequired,
        action : PropTypes.string.isRequired,
        prise : PropTypes.number.isRequired,
    }),
    map : PropTypes.func.isRequired
    
}
