import React from "react";
import FormattedDate from "./FormattedDate";
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
           <img
                src={props.info.iconUrl}
                alt={props.info.description}
                className="float-left"
              />
        <div className="float-left">
          <span className="temperature" >{Math.round(props.info.temperature)}</span>
          <span className="unit">°C</span>
          </div>
        </div>
        </div>
<div className="col-6" >
    <ul>
        <li>Precipitation 15%</li>
        <li>humidity :{props.info.humdity}
        </li>
        <li>
          wind: {props.info.wind}
        </li>
    </ul>
</div>
</div>
    </div>);

}