import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
const MyCardData = () => {
    const [data, setData] = useState([]);

    useEffect( () => {
        axios
            .get("")
            .then( res => {
                setData(res.data)
            })
            .catch(error => {
                console.log("API not working ", error)
            })
            return (
                <Card></Card>
                );

    }),[]};
            


export default MyCardData;