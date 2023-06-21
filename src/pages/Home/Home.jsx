import Banner from "../../components/Banner/Banner"
import banner from "../../assets/icons/Banner.svg"
import "./Home.css"
function Home() {
  return (
    <div className='home_page'>
      <Banner image={banner}/>
    </div>
  )
}

export default Home
