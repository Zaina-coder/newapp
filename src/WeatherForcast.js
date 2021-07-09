import React , {useState}from "react";
import Weathericon from "./Weathericon";
import "./WeatherForcast.css"
import axios from "axios";
 export default function  WeatherForcast (props){
     let [loaded, setLoaded] = useState (false) ;
     let [forecast ,setForecast] = useState (null);
     function handleResponse (response){
         console.log(response.data);
     }
      if (loaded) {
     return  (<div className="WeatherForcast" >
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
      );
     }
     else { let APIkey="5f472b7acba333cd8a035ea85a0d4d4c";
     let longtitude =props.coordinates.lon;
     let latitude =props.coordinates.lat ;
     let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&exclude={part}&appid=${APIkey}&units=metric`;
     axios.get(apiUrl).then(handleResponse)
     return null ;
    
     }
 }