import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForcast from "./WeatherForcast"
import axios from "axios";
import  "./Weather.css";

export default function Weather(props){
const [city, setCity]=useState(props.defaultcity)
//this is where we store the city name
const[weatherData,setWeatherData]=useState({ready :false});
//checking if the weatherdata ready and it false so it do the api call
function handleResponse(response){
     console.log(response.data.main);
     // we use the weatherData state to store all temp , humditiy etc...
setWeatherData({
       ready:true ,
       coordinates:response.data.coords,
    temperature:response.data.main.temp, 
    humidity:response.data.main.humidtiy,
    description:response.data.weather[0].description,
    date:new Date(response.data.dt*1000) ,
    city: response.data.name,
    icon: response.data.weather[0].icon,
    wind:response.data.wind.speed,
   
});
    }
    function search (){
     let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
// the api call will get the response
// api will use the default city which we sent from the outside world ..

    }
  
    
    function handleSubmit (event){
        event.preventDefault();
          search();
        //search for a city 
    }
    function handleCityChange(event){
        // to handle when the user type in
        setCity(event.target.value);
      
    }
     
    if (weatherData.ready){ 
        return (
    <div className="WeatherName">
        <form onSubmit= {handleSubmit}>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city" className="form-control"  autoFocus="on"  onChange={handleCityChange}/>
              </div> 
            <div className="col-3">
             <input type="submit" value="search"  onchange={handleCityChange}className="btn btn-primary w-100" />
             </div> 
            </div>
        </form>
        <WeatherInfo  info={weatherData}/>
        <WeatherForcast coordinates={weatherData.coordinates}/>
      
        </div>);
/// we store the coordinates into a key varible called coordinates inside the state and then we callin  it into the weatherforcast 

    }
     else{
   

search();

return "loading..."

    
         

     }
       
}    