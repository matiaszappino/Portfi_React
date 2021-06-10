import React, { useContext, useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { PortfiContext } from './context/portfiContext';

export const Donut = () => {
  const { compositionData } = useContext(PortfiContext)
  const [ charData, setChartData] = useState([])
  let [bonds, setBonds] = useState(0.0)
  let [stocks, setStocks] = useState(0.0)
  let [cash, setCash] = useState(0.0)

  useEffect ( () => {
    let rawChartData = []
    let ticker = ""
    let composition = {}
    let asset = {}
    for (let i = 0; i < compositionData.length; i++){
        ticker = compositionData[i].ticker;
        composition = compositionData[i].composition;
        asset[ticker] = composition;
        rawChartData.push(asset[ticker])
        //console.log("raw",rawChartData)
      };
    setChartData(rawChartData)
    //console.log("Chart Data", charData)
    charData.map( (data) => {
      setBonds(bonds += data.bonds);
      setStocks(stocks += data.stocks);
    })
    let cash_ = Math.abs((bonds + stocks) -1 )
    setCash(cash_)
    setEstado({...estado, series:[parseFloat(bonds), parseFloat(cash_), parseFloat(stocks)]})
    //console.log(estado)
  }, [compositionData]);

  
  // function DataForChart(compositionData) {
  //       console.log("entro en data for chart")
  //       let ticker = ""
  //       console.log("despues de ticker")
  //       let composition = {}
  //       console.log("despues de composition")
  //       let asset = {}
  //       console.log("despues de aaset")
  //       for (let i = 0; i < compositionData.length; i++){
  //           console.log("dentro del for")
  //           ticker = compositionData[i].ticker;
  //           composition = compositionData[i].composition;
  //           asset[ticker] = composition;
  //           //list_assets.push(asset)
  //           setChartData(...charData, asset)
  //       };
  //       console.log("Chart Data", charData)
  //   };
  
  const [estado, setEstado] = useState(
    {
      options: {
        labels: ['Bonds', 'Cash', 'Stocks']
      },
      series: [bonds ,33, stocks]
    })
    
    const { options, series } = estado
    
  

  return (
  <Chart 
  options={options}
  series={series? series:series} 
  type="donut" 
  width="380" />
  )
}
