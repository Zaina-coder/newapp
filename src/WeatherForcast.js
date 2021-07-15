import React , {useState, useEffect}from "react";
import "./WeatherForcast.css"
import axios from "axios";
import WeatherForcastDay from "./WeatherForcastDay";
 export default function  WeatherForcast (props){
     let [loaded, setLoaded] = useState (false) ;
     let [forecast,setForecast] = useState (null);
     function handleResponse (response){
         setForecast(response.data.daily);
         setLoaded(true);
     }
   useEffect (() => {
       setLoaded(false);

   },[props.coordinates]

   )
      if (loaded) {
         
     return  (
     <div className="WeatherForcast">
         <div className="row">
            
                 {forecast.map (function (dailyForecast,index){
                     if (index< 6){
                     return (
                      <div  className="col" key={index}>
                 <WeatherForcastDay data={dailyForecast} />  
                  </div>
                );
                     }
                     else {
                    return null;
                }
                     
                 })}
               
             </div>
        
     </div> 
      );
     }
     else { 
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
    
     }
 }
 //  {forecast.map (function (dailyForecast,index) For looping we use .maps and create a function receive 
  //fun 's name and index
  // loop doesnt have to return 
                  