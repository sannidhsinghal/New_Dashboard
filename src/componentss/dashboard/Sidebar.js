import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar() {
  return (
        <div className="sidebar" data-color="purple" data-background-color="white" data-image="assets/img/bg2.jpg">
        <div className="logo"><Link to="/dashboard" className="simple-text logo-normal">
            Survey Glance
          </Link></div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="nav-item active  ">
              <Link className="nav-link" to="/dashboard">
                <i className="material-icons">dashboard</i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/user">
                <i className="material-icons">person</i>
                <p>User</p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/surveytable">
                <i className="material-icons">content_paste</i>
                <p>Survey Table</p>
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    
  );
}

export default Sidebar;
