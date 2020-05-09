import React, { useState, useEffect } from "react";
import axios from "axios";
import Cart from "./Card";

export default function MyCardData() {
    const [data, setData] = useState({});
    const API = "https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US";
    const API_KEY = "7ef6152a444c38c3338ad6ca46aa51c2";

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`)
            .then( res => {
                const movies = res.data
                setData(movies);
                console.log(movies);
            })
            .catch(error => {
                console.log("API not working ", error)
            })
          
    },[]);
    return (
        <>
        {data.map( props => {
            return <Cart data={props}/>
        })}
        </>
    )
};
            


