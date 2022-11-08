import React, { useEffect, useState } from "react";
import CurrentWeather from "./current-weather";
import './Search.css';


const Search = (props) => {

    
    const [search, setSearch] = useState('');

    const fetchApi = async (e) => {
        
        e.preventDefault();
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&units=metric&appid=3449d64f1ee6c91369db70acdc2408d8";
        const response = await fetch(url);
        const resJson = await response.json();
        props.getCityInfo(resJson)
        // console.log(resJson);
    };
    
    const setCityName = (e) => {
        setSearch(e.target.value);
    };


    return (
        
        <form onSubmit={fetchApi}>
            <div className="search">
            <input type="search" 
            placeholder="Enter City Name" 
            value={search}
            onChange={setCityName}
            />
            <button type='submit' >Submit</button>
            </div>
        </form>
    
    );
}

export default Search;