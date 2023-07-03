import React from "react"
import { Link } from "react-router-dom"
import ReviewStars from "../ReviewStars/ReviewStars"
import { ReactComponent as AddToCart } from "../../assets/icons/add-to-cart.svg"
import "./ProductCard.css"

const ProductCard = props => {
  return (
    <div className='product-card'>
      <div className='product-card__btns'>
        <button className='product-card__btns--category-button'>
          {props.category}
        </button>
        <button
          className='product-card__btns--add-to-cart-button'
          onClick={() => console.log("Add Product to cart")}>
          <AddToCart />
        </button>
      </div>
      <Link to={`/products/${props.id}`}>
        <img
          className='product-card__image'
          src={props.image}
          alt={props.name}
        />
        <h3 className='product-card__name'>{props.name}</h3>
      </Link>
      <div className='product-card__footer'>
        <div className='product-card__price'>
          <span className='product-card__original-price'>
            ${props.originalPrice}
          </span>
          <span className='product-card__discount-price'>
            ${props.discountPrice}
          </span>
        </div>
        <ReviewStars
          existRating={props.reviewStars}
          onStarClick={() => console.log("Review")}
        />
      </div>
    </div>
  )
}

export default ProductCard
