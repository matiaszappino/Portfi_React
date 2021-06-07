import React from "react";

export default function Datatable({ data }) {
    const columns = data[0] && Object.keys(data[0])
    /*const deleteAsset = (id) => {
        data = data.filter((data, index) => {
            index !== id
            })
    }*/
    /*const deleteAsset = (id) => {
        data.splice(id, 1);
    }*/

    function handleRemove(id) {
        console.log(id);
      }
    
    console.log(data)
    return (
    <table cellPadding={6} cellSpacing={1}>
        <thead>
            <tr>{ data[0] && columns.map((heading) => <th>{heading}</th>) }</tr>
        </thead>
        <tbody>
            {data.map((row, index) => <tr key={row.ticker}>
                {
                    columns.map(column => <td>{row[column]}</td>)
                }
                <button onClick={deleteAsset.bind(this)}>Eliminar</button>
            </tr>)}
        </tbody>
    </table>
    );
}
// <button type="button" onClick={() => handleRemove(row.ticker)}></button>
// 