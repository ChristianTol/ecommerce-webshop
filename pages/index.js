import React from "react";

import { client } from "../lib/client";
import { Product, HeroBanner, FooterBanner } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};

// Fetching data from Sanity CMS for all products for the "You may also like" section at the bottom of the page. This is a server-side rendering function. It will be executed on the server only. It will never be executed on the client. It won't even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers. This is a good place to fetch data that you need to pre-render the page.
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
