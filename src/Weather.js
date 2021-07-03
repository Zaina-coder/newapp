import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import  "./Weather.css";

export default function Weather(props){
const [city, setCity]=useState(props.city)
//this is where we store the city name
const[weatherData,setWeatherData]=useState({ready :false});
function handleResponse(response){
     console.log(response.data.main);
setWeatherData({
       ready:true ,
    temperature:response.data.main.temp, 
    humidity:response.data.main.humdtiy,
    description:response.data.weather[0].description,
    date:new Date(response.data.dt*1000) ,
     city: response.data.name,
     iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
     wind:response.data.wind.speed,
   
});
    }
    function search (){
     let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);


    }
    function handleSubmit (event){
        event.preventDefault();
        //search for a city 
    }
    function handleCityChange(event){
        // to handle when the user type in
        setCity= (event.target.value);
        search();
    }
     
    if (weatherData.ready){ 
        return (
    <div className="WeatherName">
        <form onSubmit= {handleSubmit}>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city" className="form-control"  autoFocus="on"/>
              </div> 
            <div className="col-3">
             <input type="submit" vlaue="search"  onchange={handleCityChange}className="btn btn-primary w-100" />
             </div> 
            </div>
        </form>
        <WeatherInfo  info={weatherData}/>
      
        </div>);


    }
     else{
   

search();

return "loading..."

    
         

     }
       
}    