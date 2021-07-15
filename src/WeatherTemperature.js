import React, {useState} from "react";
export default function WeatherTemperature (props){
    //we will create state to make the celsius the default one
     const [unit, setUnit]= useState("celsius");
    function convertToFehrenhite(event) {
        event.preventDefault ();
        setUnit("Fehrenhite")

    }
     function convertToCelsius(event) {
         event.preventDefault();
         setUnit ("celsius")
     }
   
    if (unit==="celsius") {
    return (
   <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
           <span className="unit">°C |<a href="/" onClick={convertToFehrenhite} >°F </a>
           </span>
           </div> 
          ); }
          else {
               let  fehrenhite =(props.celsius *9) /5+32;
              return (
              <div className="WeatherTemperature">
      <span className="temperature">{Math.round(fehrenhite)}</span>
           <span className="unit">
               <a href="/" onClick={convertToCelsius} >°C | </a> {""}
                °F
           </span>
          </div> );
          }

}