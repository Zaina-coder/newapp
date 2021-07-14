import React from "react" ;
import Weathericon from "./Weathericon";
export default function WeatherForcastDay (props){
    function maxTemperature (){
        let temperature=  Math.round(props.data.temp.max);
        //instead of  {forecast[0].temp.max}
        return  `${temperature}°`;
    }
    function minTemperature (){
        let temperature = Math.round (props.data.temp.min);
        return `${temperature}°`
    }
    function day (){
        let date = new Date (props.data.dt *1000);
        let day = date.getDay();
        let days = ["Sun","Mon","Tue","Wed","Thr", "Fri", "Sat"]
         return days[day];
        // return days of the day
        
    }
    return ( 
    <div>
        <div className="WeatherForcast-day">{day()} </div>    
                 <Weathericon  code={props.data.weather[0].icon} size={36}/>
                 <div className="WeatherForcast-Temperatutre">
                     <span className="WeatherForcast-Temperature-max"> {maxTemperature()}</span>
                  <span className="WeatherForcast-Temperature-min">{minTemperature()}</span>
                 </div> 
                 </div>
    )
    // we  refer to the function through writting the name of the function without the dollare sign
}