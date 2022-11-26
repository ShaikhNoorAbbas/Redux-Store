import classes from './css.module.css';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
const Display = (props) => {
    const dispatch = useDispatch();
    const Handle = (id) => {
        dispatch(remove(id));
    }
    return (
        <div className={classes.cartWrapper}>
            {props.products.map((item) =>
                <div key={item.id} className={classes.cartCard}>
                    <img src={item.image} className={classes.imgp} alt="Image Not Found" />
                    <h5>{item.title}</h5>
                    <h5>${item.price}</h5>
                    <button className={classes.btn} onClick={() => Handle(item.id)}>Remove</button>
                </div>
            )}
        </div>
    );
};
export default Display;