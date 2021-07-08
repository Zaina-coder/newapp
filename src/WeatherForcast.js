import React from "react";
import Weathericon from "./Weathericon";
import "./WeatherForcast.css"
 export default function  WeatherForcast (){
     return <div className="WeatherForcast" >
         <div className="row">
             <div  className="col">
             <div className="WeatherForcast-day">Thu </div>    
                 <Weathericon  code="01d" size={36}/>
                 <div className="WeatherForcast-Temperatutre">
                     <span className="WeatherForcast-Temperature-max"> 19°</span>
                  <span className="WeatherForcast-Temperature-min">20°</span>
                 </div>
                
             </div>
         </div>
     </div>
 }