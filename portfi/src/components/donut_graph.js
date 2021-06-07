import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
      labels: ['Bonds', 'Cash', 'Stocks']},
      series: [33, 33, 33],
    }
  }

  async componentDidMount() {
    const url = "/composition";
    const response = await fetch(url);
    const data = await response.json();
    let bonds = data['bonds']
    let stocks = data['stocks']
    let cash = data['cash']
    let array = [bonds, cash, stocks]
    return this.setState({series:array})
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;