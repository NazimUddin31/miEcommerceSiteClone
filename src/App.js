import React from 'react';
import './App.css';
import PreNavbar from "./components/PreNavbar"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router} from 'react-router-dom'
import Slider from "./components/Slider"
import data from "./data/data.json"
import Offers from "./components/Offers"
import Heading from "./components/Heading"
import StarProduct from "./components/StarProduct"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu"
import HotAccessories from "./components/HotAccessories"
import ProductReviews from "./components/ProductReviews"
import Videos from "./components/Videos"
import Banner from "./components/Banner"
import Footer from './components/Footer';
import NavOptios from "./components/NavOptios"


function App() {
   
  return (
     
    <Router>

<PreNavbar />   
<Navbar />   

    
<NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>





<Slider start={data.banner.start} />
<Offers offer={data.offer} />
<Heading text="STAR PRODUCTS" />
 <StarProduct starProduct={data.starProduct} />
 <Heading text="HOT ACCESSORIES" />
 <HotAccessoriesMenu />

 
 <div exact path="/music">
 <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} /> 
 </div>
 

 <div exact path="/smartDevice">
 <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} /> 
 </div>
 

 <div exact path="/home">
 <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} /> 
 </div>
 


 <div exact path="/lifeStyle">
 <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} /> 
 </div>

 <div exact path="/mobileAccessories">
 <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} /> 
 </div>

 <Heading text="PRODUCT REVIEWS" />
  
<ProductReviews productReviews={data.productReviews} />
<Heading text="VIDEOS" />


<Videos videos={data.videos} />

<Heading text="IN THP PRESS" />

<Banner banner={data.banner}/>


<Footer footer={data.footer} />


       </Router>

     

  );
}

export default App;
