import {useState}from 'react';
import './App.css';
//Hooks
import useRequest from './hooks/useRequest';
//toastify
import{ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import Footer from './components/Footer';


function App() {
  const [searchResults,setSearchResults]= useState('Rosario')
  console.log(searchResults)
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${searchResults}&days=3&aqi=no&alerts=no`
  const {data} = useRequest(url);
  
  console.log(data)
  return (
    <div className="App">
      <ToastContainer/>
      
      {Object.keys(data).length !== 0 && (
        <>
          <Search setSearchResults={setSearchResults}/>
          <CurrentWeather data={data}/>
          <Footer/>
         
        </>
      )}
      
    </div>
  );
}

export default App;
