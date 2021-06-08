import React, { useContext, useState } from 'react';
import Chart from 'react-apexcharts'
import { PortfiContext } from './context/portfiContext';

export const Donut = () => {
  const { chartData } = useContext(PortfiContext)
  // let array = Object.keys(chartData).map(key => (chartData[key]))[0]
  // let array = Object.values(chartData)
  // let arr = array[0]
  // console.log(arr)
  const [estado, setEstado] = useState(
    {
      options: {
        labels: ['Bonds', 'Cash', 'Stocks']
      },
      series: [33,33,33]
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
