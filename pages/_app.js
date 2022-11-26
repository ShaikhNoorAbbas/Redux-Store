import '../styles/globals.css'
import Navbar from '../components/Navbar';
import classes from '../components/css.module.css';
import { Provider } from 'react-redux';
import store from '../store/store';
const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={classes.body}>
      <Provider store={store}>
        <Navbar />
        < Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp
