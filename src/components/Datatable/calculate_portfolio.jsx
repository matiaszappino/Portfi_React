import { useState } from "react";
import axios from 'axios';

export default function CalculatePortfi() {
    const [gral_data, setData] = useState({
        gral_data: undefined,
        error2: undefined
    });
    
    const executePortfolio = async ({ data }) => {
        await axios.post('/calculatePortfi', data).then(response => {
            setData({gral_data : response.data})
        }).catch(error => {
            setData({ error2: error.message,
            gral_data: undefined})
        })    
    };
    return {...gral_data, executePortfolio};
};
