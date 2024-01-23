import '../style/Items.css';
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
    props : PropTypes.array,
    map : PropTypes.func
}
