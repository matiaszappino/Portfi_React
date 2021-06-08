import React, { useContext, useState } from 'react';
import Chart from 'react-apexcharts'
import { PortfiContext } from './context/portfiContext';

export const Donut = () => {
  const { chartData } = useContext(PortfiContext)
    
  const [state, setState] = useState(
  {
    options: {
      labels: ['Bonds', 'Cash', 'Stocks']
    },
    series: [33, 33, 33]
  })

  const { options, series } = state

  return (
  <Chart 
  options={options}
  series={series? series:series} 
  type="donut" 
  width="380" />
  )
}
