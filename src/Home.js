import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id="123"
          title="product 1"
          price={11.94}
          rating={5}
          image={
            "https://res.cloudinary.com/dxfsqdkwg/image/upload/v1600848795/thumbnail_ava_d50a851ca2.jpg"
          }
        />
        <Product
          id="123"
          title="product 1"
          price={11.94}
          rating={5}
          image={
            "https://res.cloudinary.com/dxfsqdkwg/image/upload/v1600848795/thumbnail_ava_d50a851ca2.jpg"
          }
        />
      </div>
      <div className="home_row">
        <Product
          id="123"
          title="product 1"
          price={114.94}
          rating={5}
          image={
            "https://res.cloudinary.com/dxfsqdkwg/image/upload/v1600848795/thumbnail_ava_d50a851ca2.jpg"
          }
        />
        <Product
          id="123"
          title="product 1"
          price={11.94}
          rating={5}
          image={
            "https://res.cloudinary.com/dxfsqdkwg/image/upload/v1600848795/thumbnail_ava_d50a851ca2.jpg"
          }
        />
        <Product
          id="123"
          title="product 1"
          price={11.94}
          rating={5}
          image={
            "https://res.cloudinary.com/dxfsqdkwg/image/upload/v1600848795/thumbnail_ava_d50a851ca2.jpg"
          }
        />
      </div>
      <div className="home_row">
        <Product
          id="123"
          title="product 1"
          price={11.94}
          rating={5}
          image={
            "https://res.cloudinary.com/dxfsqdkwg/image/upload/v1600848795/thumbnail_ava_d50a851ca2.jpg"
          }
        />
      </div>
    </div>
  );
}

export default Home;
