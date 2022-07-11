import React from "react";
import Allprd from "../screens/Allprd";
import Blog from "../screens/Blog";
import Selling from "../screens/Selling";
import TrendBot from "../screens/TrendBot";
import TrendTop from "../screens/TrendTop";
import SliderSl from "../screens/SliderSl";
import "../Style/body.css";


function Body() {
  return (
    <div className="body">
      <SliderSl />
      <div className="gap-element"></div>
      <TrendTop />
      <Selling />
      <div className="gap-element"></div>
      <TrendBot />
      <Allprd  />
      <div className="gap-element"></div>
      <Blog />
      <div className="gap-element"></div>
      
    </div>
  );
}

export default Body;
