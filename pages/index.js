import Head from 'next/head';
import Products from '../components/Products';
const IndexPage = () => {
  return (  
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <Products />
    </div>
  );
};
export default IndexPage;