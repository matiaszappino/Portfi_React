import React, { useContext, useEffect, useState } from "react";
import { PortfiContext } from "../context/portfiContext";
import "../main/Main.css"
import Datatable from "./Datatable";
import ReturnTicker from "./returnTicker"

export default function InputField({ data }) {
    
    const { dataFromBackend } = useContext(PortfiContext)
    
    const [value, setValue] = useState({
        ticker : '',
        weight : 0,
        startDate : '',
        endDate : '',
    })
    const {
        endDate, startDate, ticker, weight
    } = value

    
    return (
        <div className="inputField">
        <div>
        <ReturnTicker/>
        </div>

        <div>
        <Datatable data={dataFromBackend}/>
        </div>
    </div>
    );
    
}


/* <div>
<div className="form-field"></div>
<div className="control"></div>
<form onSubmit={handleSubmit}>
<label htmlFor="input_ticker">Ticker</label>
<input 
type="text" 
value={ticker}
name="ticker"
onChange={handleInputChange}
/>
<input 
type="number" 
value={weight}
name="weight"
onChange={handleInputChange}
/>
<input 
type="submit"
name="add"
value = "add"
/>
</form>
<form onSubmit={handleSubmit}>
<input 
type="date" 
value={startDate}
name="startDate"
onChange={handleInputChange}
/>
<input 
type="date" 
value={endDate}
name="endDate"
onChange={handleInputChange}
/>
<input 
type="submit"
name="submit"
value = "Submit"
/>
</form>*/
// const handleInputChange = (e) => {
//     setValue({
//         ...value,[e.target.name]:e.target.value
//     })
// }
// const handleSubmit = (e) => {
//     e.preventDefault()
//     if (ticker === "" || weight === "" || startDate === "" || endDate === "") {
//         alert("NO SEA NABO, MIJO")
//     }
// }