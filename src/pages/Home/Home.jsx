import "./Home.css";
import banner from "../../assets/icons/Banner.svg";
import cart from "../../assets/cart.svg";

import rating from "../../assets/rating.svg";

import { Products } from "../../utils/constants";
function Home() {
  
  return (
    <div className="home_page">
      <img className="banner_img" src={banner} alt="" />
      <div className="container">
        <div className="productsList">
          {Products.map((product)=>{
            return(
              <div className="productItem">
              <div className="productHeader">
                <div className="tag">{product.tag}</div>
                <div className="addToCart">
                  <img src={cart} alt="" />
                </div>
              </div>
              <div className="productImg">
                <img src={product.img} alt={product.name}/>
              </div>
              <div className="productDetails">
                <h3>{product.name}</h3>
                <hr style={{border: "1px solid #DEDDDD"
  }}/>
                <div className="productInfo">
                  <div className="pricing">
                    <div className="oldPrice" style={{ textDecoration: 'line-through' }}>$20.00</div>
                    <div className="newPrice">{product.newPrice}</div>
                  </div>
                  <div className="rating">
                    <img src={rating} alt="rating"/>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
         
    

        </div>
        <div className="newsletterContainer">
          <h1>Subscribe to<br/>
our Newsletter
</h1>
<div className="emailInput">
  <input type="text" placeholder="Your Email Address"/>
  <button class="subscribe"> Subscribe</button>
</div>
        </div>
    
      </div>

      <div className="copyrightContainer"></div>
    </div>
  );
}

export default Home;
