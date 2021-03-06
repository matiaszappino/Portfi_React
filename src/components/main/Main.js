import React, { useEffect, useState } from "react";
import "./Main.css";
import MouseOverPopover from "../Popover";
import { Donut } from "../donut_graph";
import InputField from "../Datatable/InputField";
import LineGraph from "../lineGraph";
import PerformanceTable from "../performanceTable"
//new Main 
const Main = () => {
  const [series, setSeries] = useState();

  return (
    <main>
      <div className="main__container">
        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <InputField />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Composition</h1>
                <p>Composition of your Portfolio</p>
              </div>
              <MouseOverPopover />
            </div>
            <Donut series={series} />
          </div>

          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Historic Returns</h1>
                <p> From start date to end date</p>
              </div>
              <MouseOverPopover />
            </div>
          <LineGraph />
          </div>

          <div className="charts__right">
          <PerformanceTable />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
