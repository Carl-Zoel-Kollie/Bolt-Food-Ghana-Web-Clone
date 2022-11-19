import React, {useState} from "react";
import './style.css';
import data from "./TemplateData.json";
import { Link } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="mycontainer">
        <h1><span style={{color:"rgb(34 197 94)"}}>Bọlt</span> <span style={{color:"#111"}}>Food</span></h1>
        <br/>
        <h2>Delivery in <span style={{color:"rgb(34 197 94)"}}>Accra</span></h2>
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Restaurants or Cuisine" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.title}</h3>
                      <p className="price">GH₵{val.price}</p>
                     <img src="star.png" style={{ width: '20px', height:"20px" ,marginTop:"-190px",marginLeft : 170, padding: 20 }}/>
                     <h4>4.3</h4>
                     <br></br>
                     <Link to="/pay"><button>Order</button></Link>
                  </div> 
                )
              })
          }
        </div>
        
      </div>
      <div className="myfooter">
          <h1>Order Now!</h1>
        </div>
        <div className="paymobile">
          <h1>This Bolt Food Clone Web App can only be viewed on a laptop. Reload the link on your laptop to interact with the app. 
            Follow the social media pages below to get notified when the mobile version of this clone is deployed.
           <br></br>
            <a  href="https://linktr.ee/Carl_Zoel_Kollie"><h6>Link to all CZK Code social Media pages</h6></a>
          </h1>
        </div>
    </>
  )
}

export default App;