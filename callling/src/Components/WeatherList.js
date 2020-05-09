import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "../Components/WeatherCard";

export default function
MyWeatherData()
 {
    const [data, setData] = useState([]);
    

    useEffect( () => {
        getWeather();
    },[]);

    const getWeather = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=4fed241c&app_key=c6f26d054410ef039ffc2fc20ddb4fb4`);
        const data = await response.json();
        setData(data.hits);
        console.log(data);
    }

    return (
        <>
        {data.map( props => (
            <WeatherCard  data={props}/>
        ))}
        </>
    );
};

