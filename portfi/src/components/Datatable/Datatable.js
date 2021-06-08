import React, { useState, useEffect, useContext} from "react";
import axios from 'axios'
import { PortfiContext } from "../context/portfiContext";


export default function Datatable() {
    //console.log(data)
    //const [fil, setFilter] = useState();
    //setFilter(data);
    //console.log(fil)
    const { dataFromBackend, dataFiltrada, setDataFiltrada, setLoading, setLoadingChart  } = useContext(PortfiContext)
    useEffect(() => {
        setDataFiltrada(dataFromBackend)
    },[dataFromBackend])
    useEffect(() => {
        setLoading(true)
    },[])
    const columns = dataFromBackend[0] && Object.keys(dataFromBackend[0])
    
    const deleteAsset = (id) => {

        setDataFiltrada(dataFiltrada.filter((data, index) => (id !== index)))
        //setLoading(true)
        setLoadingChart(true)
        
    }

    return (
    <table cellPadding={6} cellSpacing={1}>
        <tbody>
            {dataFiltrada.map((row, index) => <tr key={index}>
                {
                    columns.map(column => <td>{row[column]}</td>)
                }
                <button onClick={() => deleteAsset(index)}>Delete</button>
            </tr>)}
        </tbody>
    </table>
    );
}

// <thead>
// <tr>{ data[0] && columns.map((heading) => <th>{heading}</th>) }</tr>
//</thead>
// <button type="button" onClick={() => handleRemove(row.ticker)}></button>
// 