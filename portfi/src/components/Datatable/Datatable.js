import React, { useState, useEffect } from "react";
import axios from 'axios'


export default function Datatable({ data }) {
    console.log(data)
    const [fil, setFilter] = useState();
    setFilter(data);
    console.log(fil)
    const columns = fil[0] && Object.keys(fil[0])
    const deleteAsset = (id) => {
        fil.filter((data, index) => {
            if (id !== index) {
                return data
            }
        })
        setFilter(data)
    }

    return (
    <table cellPadding={6} cellSpacing={1}>
        <tbody>
            {fil.map((row, index) => <tr key={index}>
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