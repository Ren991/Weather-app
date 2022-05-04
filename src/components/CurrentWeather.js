import React from "react";
import "../styles.css";


function CurrentWeather({ data }) {
  return (
    <div>
      <div className="main-container">
        <div className="cards">
          <div className="card card-1">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h4 className="card__exit">Current Weather</h4>
            <img src={data.current.condition.icon} alt="icon" />
            
            <h1 style={{ fontSize: 40 }}>{data.current.temp_c}°C</h1>
            <h1 style={{ fontSize: 20,marginBottom:10 }}>{data.current.condition.text}</h1>
            <h2>Precipitation: {data.current.precip_in} mm</h2>
              <h2>Wind: {data.current.wind_kph} km/h</h2>
            
          </div>

          
          <div className="card card-2">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h1>Today</h1>
            <h2>Max Temp: {data.forecast.forecastday[0].day.maxtemp_c}°C</h2>
            <h2>Min Temp: {data.forecast.forecastday[0].day.mintemp_c}°C</h2>
            <h2>Sunrise: {data.forecast.forecastday[0].astro.sunrise}</h2>
            <h2>Sunset: {data.forecast.forecastday[0].astro.sunset}</h2>
          </div>
          <div className="card card-3">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h2>Region: {data.location.region}</h2>
                <h2>Country: {data.location.country}</h2>
                <h2>City: {data.location.name}</h2>
                <h2>Last Updated: {data.current.last_updated.slice(10,16)}hs</h2>
            
          </div>
            {
                data.forecast.forecastday.map((weather)=>(
                    <div className="card card-4">
                    <div className="card__icon">
                      <i className="fas fa-bolt"></i>
                    </div>
                    <h3 className="card__exit">{weather.date}</h3>
                    <img src={weather.day.condition.icon} alt="icon" />
                    
                    <h1 style={{ fontSize: 40 }}>{weather.day.avgtemp_c}°C</h1>
                    <h1 style={{ fontSize: 20,marginBottom:10 }}>{weather.day.condition.text}</h1>
                    <h2>Chance of rain: {weather.day.daily_chance_of_rain}%</h2>
                    <h3 style={{marginBottom:10 }}>Max Temp: {weather.day.maxtemp_c}°C</h3>
                    <h3>Min Temp: {weather.day.mintemp_c}°C</h3>
                    
                  </div>  
                ))
            }
          

          
        </div>
      </div>
      
      {/*  <div classNameName='current-weather box-shadow'>
                <img src={data.current.condition.icon} alt="icon"/>
                <h1>{data.current.temp_c}°C</h1>
            <div className="content">
              <h5>Precipitation: {data.current.precip_in} mm</h5>
              <h5>Wind: {data.current.wind_kph} km/h</h5>
              
              <h5></h5>
            </div>
            <div className=" location">
                
                <h2>Region: {data.location.region}</h2>
                <h2>Country: {data.location.country}</h2>
                <h2>City: {data.location.name}</h2>
            
            </div>     
             
              
                
            </div>
            
             */}
    </div>
  );
}
export default CurrentWeather;
