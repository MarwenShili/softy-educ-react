import "./Home.css";
import banner from "../../assets/icons/Banner.svg";
function Home() {
  return (
    <div className="home_page">
      <img className="banner_img" src={banner} alt="" />
    </div>
  );
}

export default Home;
