import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
export const PortfiContext = createContext();

export const PortfiProvider = ({children}) => {
    const [dataFromBackend, setDataFromBackend] = useState([])
    const [dataFiltrada, setDataFiltrada] = useState([]);
    const [loading, setLoading] = useState(false)
    const [loadingChart, setLoadingChart] = useState(false)
    const [chartData, setchartData] = useState({})

    useEffect(() => {
        if (loading) {
            axios.get('/portfolio')
            .then(res => setDataFromBackend(res.data || []))
            setLoading(false)
        }
    },[dataFiltrada, loading])
    
    useEffect(async () => {
        if (loadingChart) {
            const url = "/composition";
            const response = await fetch(url);
            const data = await response.json();
            let bonds = data['bonds']
            let stocks = data['stocks']
            let cash = data['cash']
            let array = [bonds, cash, stocks]
            setchartData({series:array})
            console.log(chartData)
            setLoadingChart(false)
        }
    },[dataFiltrada, loadingChart])
    return (
        <PortfiContext.Provider value={{dataFromBackend, setDataFromBackend, dataFiltrada, setDataFiltrada, setLoading, chartData, setLoadingChart}}>
            {children}
        </PortfiContext.Provider>
        ) 
}