import React, { useEffect, useState } from "react";
import axios from 'axios';
import Datatable from "./Datatable";
import ReturnTicker from "./returnTicker"

/* - Input String
- Input Float
- Start Fecha
- End Fecha
- Boton +
- Boton Submit
*/
export default function InputField({ data }) {
    const [dataFromBackend, setDataFromBackend] = useState([])
    const [value, setValue] = useState({
        ticker : '',
        weight : 0,
        startDate : '',
        endDate : '',
    })
    const {
        endDate, startDate, ticker, weight
    } = value

    const handleInputChange = (e) => {
        setValue({
            ...value,[e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (ticker === "" || weight === "" || startDate === "" || endDate === "") {
            alert("NO SEA NABO, MIJO")
        }
    }
    useEffect(() => {
        axios.get('/portfolio')
        .then(res => setDataFromBackend(res.data || []))
    },[])

    //console.log(dataFromBackend)
    return (<div>
        <ReturnTicker/>
        <Datatable data={dataFromBackend}/>
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