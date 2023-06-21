import React, { useState } from "react"

import Banner from "../../components/Banner/Banner"
import productImgPlaceholder from "../../assets/product-details-placeholder.png"
import ReviewStars from "../../components/ReviewStars/ReviewStars.jsx"
import Button from "../../components/Button/Button"
import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow-add-to-cart.svg"
import banner from "../../assets/product-details-banner.png"
import "./ProductDetails.css"

const ProductDetails = () => {
  const [quantityValue, setQuantityValue] = useState(1)
  const handleStarReview = star => console.log(star)
  return (
    <main>
      <div className='product-details-banner'>
        <Banner image={banner} />
      </div>
      <div className='product-details'>
        <section className='overview'>
          <div className='overview__image'>
            <button className='overview__image-btn'>Millets</button>
            <div className='overview__image-img-container'>
              <img
                src={productImgPlaceholder}
                alt='Product alternative text'
                className='overview__image-img-container__img'
              />
            </div>
          </div>
          <div className='overview__content'>
            <h2 className='overview__title'>Health Pistachios</h2>
            <ReviewStars existRating={4} onStarClick={handleStarReview} />
            <div className='price'>
              <span className='original-price'>$13.00</span>
              <span className='discount'>$20.00</span>
            </div>
            <div className='description'>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </div>
            <div className='actions'>
              <div className='quantity'>
                <label htmlFor='quantity'>Quantity:</label>
                <input
                  type='number'
                  className='quantity-input'
                  value={quantityValue}
                  onChange={e => setQuantityValue(e.target.value)}
                  min={1}
                  id='quantity'
                />
                <Button>
                  <span>Add to Cart</span>
                  <RightArrow />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <div className='product-details__description'>
          <div className='product-details__description-btns-container'>
            <Button>Product Description</Button>
            <Button isSecondary={true}>Additional Info</Button>
          </div>
          <p className='product-details__description-text'>
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
  )
}

export default ProductDetails
