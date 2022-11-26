import Head from 'next/head';
import { useSelector } from 'react-redux';
import Display from '../components/Display';
const Cart = () => {
    const product = useSelector(state => state.cart);
    return (
        <div>
            <Head>
                <title>Cart Page</title>
            </Head>
            <center>
                <h1>Welcome to Cart Page</h1>
            </center>
            <h2>{product.length === 0 && <center>Nothing Was Added 😥 Go to Home and Add Something 🙂</center> || <Display products={product} />}</h2>
        </div>
    );
};
export default Cart;