import Link from 'next/link';
import classes from './nav.module.css';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const item = useSelector((state) => state.cart);
    console.log(item);
    return (
        <div className={classes.container}>
            <span>REDUX STORE</span>
            <div className={classes.nesContainer}>
                <span className={classes.homelink}><Link href='/'>Home </Link></span>
                <span className={classes.homelink}><Link href='/cart'>Cart</Link></span>
                <span className={classes.cart}>Cart Item: {item.length}</span>
            </div>
        </div>
    );
};
export default Navbar;