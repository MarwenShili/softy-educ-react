import "./Home.css";
import banner from "../../assets/icons/Banner.svg";
import cart from "../../assets/cart.svg";
import almonds from "../../assets/almonds.png";
import broc from "../../assets/broc.png";
import rating from "../../assets/rating.svg";

import banana from "../../assets/banana.png";
import nuts from "../../assets/nuts.png";
import tomato from "../../assets/tomato.png";
import mung from "../../assets/Mung.png";
import hazelnut from "../../assets/hazel.png";
import eggs from "../../assets/eggs.png";
import rusk from "../../assets/rusk.png";
import bean from "../../assets/bean.png";
import white from "../../assets/whazel.png";
import corn from "../../assets/corn.png";
function Home() {
  const Products =[
    {tag:"Vegetable",
     img:broc,
     name:"Calabrese Broccoli",
     oldPrice:"$20.00",
     newPrice:"$13.00"
  },
  {tag:"Fresh",
     img:banana,
     name:"Fresh Banana Fruites",
     oldPrice:"$20.00",
     newPrice:"$14.00"
  },
  {tag:"Millets",
     img:nuts,
     name:"White Nuts",
     oldPrice:"$20.00",
     newPrice:"$15.00"
  },
  {tag:"Vegetable",
     img:tomato,
     name:"Vegan Red Tomato",
     oldPrice:"$200",
     newPrice:"$17.00"
  },
  {tag:"Health",
     img:mung,
     name:"Mung Bean",
     oldPrice:"$20.00",
     newPrice:"$11.00"
  },
  {tag:"Nuts",
     img:hazelnut,
     name:"Brown Hazelnut",
     oldPrice:"$20.00",
     newPrice:"$12.00"
  },
  {tag:"Fresh",
     img:eggs,
     name:"Eggs",
     oldPrice:"$20.00",
     newPrice:"$17.00"
  },
  {tag:"Fresh",
     img:rusk,
     name:"Zelco Suji Elaichi Rusk",
     oldPrice:"$20.00",
     newPrice:"$15.00"
  },
  {tag:"Health",
  img:bean,
  name:"Mung Bean",
  oldPrice:"$20.00",
  newPrice:"$11.00"
},
{tag:"Nuts",
img:white,
name:"White Hazelnut",
oldPrice:"$20.00",
newPrice:"$12.00"
},
{tag:"Fresh",
img:corn,
name:"Fresh Corn",
oldPrice:"$20.00",
newPrice:"$17.00"
},
{tag:"Fresh",
img:almonds,
name:"Organic Almonds",
oldPrice:"$20.00",
newPrice:"$15.00"
},

  ]
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
