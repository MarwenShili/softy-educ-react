import "./Footer.css";
import logo from "../../assets/logo.svg"
import insta from "../../assets/insta.svg"
import fb from "../../assets/fb.svg"
import pintrest from "../../assets/pintrest.svg"
import twitter from "../../assets/twitter.svg"
function Footer() {
  const images =[
    {logo:insta},
    {logo:fb},
    {logo:twitter},
    {logo:pintrest}
  ]
  const contact =[{
    title:"Email",
    desc:"needhelp@Organia.com"
  },
{
  title:"Phone",
  desc:'666 888 888'
},

{
  title:"Address",
  desc:'88 road, borklyn street, USA'
}]

  return <div className="footer">
    <div className="footerContainer">
      <div className="contactUs">
        <h1>Contact Us</h1>
        <div className="contactDetails">
   {contact.map((ele)=>{
    return (
      <div className="element">
      <h1>{ele.title}</h1>
      <h3>{ele.desc}</h3>
      </div>
    )
   })}
        </div>
      </div>
      <div className="storeInfo">
        <div className="title">
          <img src={logo} alt=""/>
          <span className="brandName">Organick</span>
        </div>
        <p>Simply dummy text of the printing and typesetting industry.<br/>
Lorem Ipsum simply dummy text of the printing </p>
<div className="socialMedia">
  {images.map((img)=>{
    return(
      <div className="social" >
    <img src={img.logo}/>
      </div>
    )
  })}
 

</div>
      </div>
      <div className="pages"><h1>Utility Pages</h1>
      <ul style={{ listStyle: 'none' }}>
        <li>Style Guide</li>
        <li> 404 Not Found</li>
        <li>Password Protected</li>
        <li> Licences</li>
        <li> Changelog</li>
      </ul>
      </div>
    </div>
    <div className="copyRight">Copyright © <span>Organick</span>  | Designed by <span>VictorFlow</span> Templates - Powered by <span>Webflow</span> </div>
  </div>;
}

export default Footer;
