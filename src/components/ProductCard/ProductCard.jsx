import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ReviewStars from "../ReviewStars/ReviewStars";
import { ReactComponent as AddToCart } from "../../assets/icons/add-to-cart.svg";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/slices/Cart-Slice";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    return navigate(`/products/${product?.id}`, {
      state: { product: product },
    });
  };

  const addProductToCart = (event) => {
    event.stopPropagation(); // Stop event propagation
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="product-card" onClick={handleNavigate}>
      <div className="product-card__btns">
        <button className="product-card__btns--category-button">
          {product.category}
        </button>
        <button
          className="product-card__btns--add-to-cart-button"
          onClick={addProductToCart}
        >
          <AddToCart />
        </button>
      </div>
      {/* <Link to={`/products/${product.id}`}> */}
      <img
        className="product-card__image"
        src={product.image}
        alt={product.name}
      />
      <h3 className="product-card__name">{product.name}</h3>
      {/* </Link> */}
      <div className="product-card__footer">
        <div className="product-card__price">
          <span className="product-card__original-price">
            ${product.originalPrice.toFixed(2)}
          </span>
          <span className="product-card__discount-price">
            ${product.discountPrice.toFixed(2)}
          </span>
        </div>
        <ReviewStars
          existRating={product.reviewStars}
          onStarClick={() => console.log("Review")}
        />
      </div>
    </div>
  );
};

export default ProductCard;
