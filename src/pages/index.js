import Head from "next/head"
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Header/>
      <Head>
        Amazon 2.0
      </Head>
      <main className="max-w-screen-2xl mx-100">
        {/* banner */}
        <Banner/>

        {/* productFeed */}
        <ProductFeed products={products}/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res)=>res.json()
  );

  return {
    props:{
      products,
    
    },
  };
}