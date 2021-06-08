import { useState } from "react";
import axios from 'axios';
export default function UsePost() {
    const [data, setData] = useState({
        data: undefined,
        error: undefined
    });
    const executePost = ({ data }) => {
        axios.post('/returnTicker', data).then(response => {
            setData({data : response.data})
        }).catch(error => {
            setData({ error: error.message,
            data: undefined})
        })    
    };
    return {...data, executePost};
};
