import '../style/Form.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterChangeValue } from '../actions/actionsItems';
import { Items } from './Items';

export const Filter = () => {
    const filterValue = useSelector((state) => state.FilterReducer);
    const items = useSelector((state) => state.ItemsReduser);
    const dispatch = useDispatch();
    const { valueFilter } = filterValue;

    let filterArr = [];
    const copyItems = items.slice(0);

    copyItems.map((elem) => {
        elem.action.toLowerCase().match(`${valueFilter.toLowerCase()}`)
            ? filterArr.push(elem)
            : null;
    });

    const handleFilterValue = (e) => {
        const { name, value } = e.target;
        dispatch(filterChangeValue(name, value));
    };

    return (
        <>
            <div className='form-filter'>
                <input
                    type='text'
                    className='filter'
                    placeholder='поиск по словам'
                    name='valueFilter'
                    value={valueFilter}
                    onChange={handleFilterValue}
                />
            </div>
            <Items props={filterArr} />
        </>
    );
};
