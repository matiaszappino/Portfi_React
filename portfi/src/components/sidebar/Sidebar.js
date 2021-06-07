import "./Sidebar.css";
import logo from "../../assets/logo.png";
import React from 'react'
// import UserSettings from "../UserSettings/UserSettings.js"
// import PortfolioA from "../Portfolios/PortfolioA.js"
// import PortfolioB from "../Portfolios/PortfolioB.js"
// import PortfolioC from "../Portfolios/PortfolioC.js"
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

const Sidebar = (props) => {
  return (
      <div className={props.sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <img src={logo} alt="logo" />
            <h1>PORTFI</h1>
          </div>
          <i
            onClick={() => props.closeSidebar()}
            className="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
        </div>
        <div className="sidebar__menu">
          <NavLink to='/' exact activeClassName="active_menu_link">
            <div className="sidebar__link">
              <i className="fa fa-home"></i>
              <a href="#">Dashboard</a>
            </div>
          </NavLink>
          {/* <h2>MY PORTFOLIOS</h2>
          <NavLink to='/portfolioa'>
            <div className="sidebar__link">
              <i className="fa fa-briefcase"></i>
              Portfolio A
            </div>
          </NavLink>
          <NavLink to='/portfoliob'>
            <div className="sidebar__link">
              <i className="fa fa-briefcase"></i>
              Portfolio B
            </div>
          </NavLink>
          <NavLink to='/portfolioc'>
            <div className="sidebar__link">
              <i className="fa fa-briefcase"></i>
              Portfolio C
            </div>
          </NavLink> */}
          <NavLink to='/benchmarks' activeClassName="active_menu_link">
            <div className="sidebar__link">
              <i className="fa fa-line-chart"></i>
              Benchmark
            </div>
          </NavLink>
          {/* <NavLink to='/usersettings'>
            <div className="sidebar__link">
              <i className="fa fa-wrench"></i>
              User Settings
            </div>
          </NavLink>
          <div className="sidebar__logout">
            <i className="fa fa-power-off"></i>
            Log out
          </div> */}
        </div>
      </div>
  );
};

export default Sidebar;
