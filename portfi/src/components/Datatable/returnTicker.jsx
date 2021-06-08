import React, { useState } from "react";
import axios from 'axios';
import UsePost from './usePost'
import { useContext } from "react";
import { PortfiContext } from "../context/portfiContext";
export default function InputTicker() {
    const { setLoading } = useContext(PortfiContext)
    const [ticker, setTicker] = useState("");
    const [weight, setWeight] = useState(0);
    
    const {data, error, executePost} = UsePost();
    
    const handleSubmit = event => {
        event.preventDefault();
        executePost({data:{ticker, weight}})
        setLoading(true)       
    }
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input type="text" value={ticker} name='ticker' onChange={event => setTicker(event.target.value)}/>
                <input type="number" value={weight} name='weight' onChange={event => setWeight(event.target.value)}/>
                <input type="submit" value="Add"/>
            </form>
            {error && console.log("El Ticker no es valido")}
        </div>
    )
};