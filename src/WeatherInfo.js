import React from "react";
import FormattedDate from "./FormattedDate";
import Weathericon from "./Weathericon";
import WeatherTemperature from "./WeatherTemperature";
export default  function WeatherInfo (props){
     return ( 
        <div className="WeatherData">
    <h1> {props.info.city}</h1>
        <ul>
        <li> <FormattedDate  date={props.info.date} /></li>
        <li>{props.info.description} </li>
        </ul>
    <div className="row mt-3">
        <div className="col-6 ">
            <div className="clearfix">
           <div className="float-left">
               <Weathericon   code={props.info.icon} size={66}
                alt={props.info.description}/>
                </div>
        <div className="float-left">
            <WeatherTemperature celsius={props.info.temperature} />
         </div>
        </div>
        </div>
<div className="col-6" >
    <ul>
        <li>Precipitation 15%</li>
        <li>humidity :{props.info.humdity}
        </li>
        <li>
          wind: {props.info.wind} km/h
        </li>
    </ul>
</div>
</div>
    </div>);

}