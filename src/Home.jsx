import React, { useState } from "react";
import { useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import ProductService from "./services/productServices";

function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let productService = new ProductService();
        productService.getAll().then((result) => setProduct(result.data.data));
        console.log(product);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        ></img>

        <div className="home_row">
          {product.map((item) => {
            return (
              <Product
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
