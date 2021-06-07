import React, { useState } from "react";
import axios from 'axios';
import UsePost from './usePost'
export default function InputTicker() {
    const [ticker, setTicker] = useState("");
    const [weight, setWeight] = useState(0);
    const {data, error, executePost} = UsePost();
    const handleSubmit = event => {
        event.preventDefault();
        executePost({data:{ticker, weight}});       
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