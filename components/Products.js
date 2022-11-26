import classes from './css.module.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
const Products = () => {
    const dispatch = useDispatch();
    const [list, setproducts] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log(data);
            setproducts(data);
        }
        fetchdata();
    }, []);
    const Handle = (item) => {
        dispatch(add(item));
    }
    return (
        <div className={classes.productsWrapper}>
            {list.map((item) => (
                <div className={classes.card} key={item.id}>
                    <img src={item.image} className={classes.imgp} alt="Image Not Found" />
                    <h4>{item.title}</h4>
                    <h5>${item.price}</h5>
                    <button onClick={() => Handle(item)} className={classes.btn}>Add To Cart</button>
                </div>
            ))}
        </div>
    );
};
export default Products;