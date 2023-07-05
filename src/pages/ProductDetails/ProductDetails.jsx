import React, { useState } from "react";

import Banner from "../../components/Banner/Banner";
import productImgPlaceholder from "../../assets/images/product-details-placeholder.png";
import ReviewStars from "../../components/ReviewStars/ReviewStars.jsx";
import Button from "../../components/Button/Button";
import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow-add-to-cart.svg";
import banner from "../../assets/images/product-details-banner.png";
import "./ProductDetails.css";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const [quantityValue, setQuantityValue] = useState(1);
  const handleStarReview = (star) => console.log(star);
  const location = useLocation();
  const { product } = location?.state;

  return (
    <main>
      <div className="product-details-banner">
        <Banner image={banner} />
      </div>
      <div className="product-details">
        <section className="overview">
          <div className="overview__image">
            <button className="overview__image-btn">{product?.category}</button>
            <div className="overview__image-img-container">
              <img
                src={product?.image}
                alt="Product alternative text"
                className="overview__image-img-container__img"
              />
            </div>
          </div>
          <div className="overview__content">
            <h2 className="overview__title">{product?.name}</h2>
            <ReviewStars
              existRating={product?.reviewStars}
              onStarClick={handleStarReview}
            />
            <div className="price">
              <span className="original-price">${product?.originalPrice}</span>
              <span className="discount">${product.discountPrice}</span>
            </div>
            <div className="description">{product.description}</div>
            <div className="actions">
              <div className="quantity">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  className="quantity-input"
                  value={quantityValue}
                  onChange={(e) => setQuantityValue(e.target.value)}
                  min={1}
                  id="quantity"
                />
                <Button>
                  <span>Add to Cart</span>
                  <RightArrow />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <div className="product-details__description">
          <div className="product-details__description-btns-container">
            <Button>Product Description</Button>
            <Button isSecondary={true}>Additional Info</Button>
          </div>
          <p className="product-details__description-text">
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health,
            ecology, and care. We aim to give our customers a healthy
            chemical-free meal for perfect nutrition. It offers about 8–10%
            carbs. Simple sugars — such as glucose and fructose — make up 70%
            and 80% of the carbs in raw.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
