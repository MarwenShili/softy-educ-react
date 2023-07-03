import Banner from "../../components/Banner/Banner"
import Container from "../../components/Container/Container"
import ProductCard from "../../components/ProductCard/ProductCard"
import bannerImg from "../../assets/icons/Banner.svg"
import productData from "../../data/productsData"

import "./Home.css"

function Home() {
  return (
    <div className='home_page'>
      <Banner image={bannerImg} />
      <Container>
        <div className='products-container'>
          {productData.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home
