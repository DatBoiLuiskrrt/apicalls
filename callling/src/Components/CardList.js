import React, { useState, useEffect } from "react";
import axios from "axios";
import Cart from "./Card";

export default function MyCardData() {
    const [data, setData] = useState([]);

    const API = "https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US";

    const APP_KEY = "4fed241c";

    useEffect( () => {
        getRecipes();
    },[]);
    
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=4fed241c&app_key=c6f26d054410ef039ffc2fc20ddb4fb4`);
    const data = await response.json();
    setData(data.hits);
    console.log(data);
  }
    return (
        <>
        {data.map( props => ( 
            <Cart title={props}/>
        ))}
        </>
    )
};
            


