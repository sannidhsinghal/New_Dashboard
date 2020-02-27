import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page from "./components/Page.js";
import Home from "./components/Home";
import CreateSurvey from "./components/CreateSurvey";
<<<<<<< HEAD
import Dashboard from './componentss/dashboard/Dashboard.js';
import User from './componentss/dashboard/User.js';
import {Nav} from 'react-bootstrap';
import SurveyTable from './componentss/dashboard/SurveyTable.js';
import ResponseChart from './componentss/dashboard/ResponseChart.js';
=======
import Dashboard from "./componentss/dashboard/Dashboard.js";
import User from "./componentss/dashboard/User.js";
import { Nav } from "react-bootstrap";
>>>>>>> 36b79fc9f1b26f03ccfa99924e8b3d0d50acf168

class App extends React.Component {
  render() {
    var navBar;
    if (localStorage.getItem("userId")) {
      navBar = (
        <div
          className="sidebar"
          data-color="purple"
          data-background-color="white"
          data-image="assets/img/bg2.jpg"
        >
          <div className="logo">
            <Nav.Link href="/dashboard" className="simple-text logo-normal">
              Survey Glance
            </Nav.Link>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              <li className="nav-item active  ">
                <Nav.Link href="/dashboard">
                  <i className="material-icons">dashboard</i>
                  <p>Dashboard</p>
                </Nav.Link>
              </li>
              <li className="nav-item ">
                <Nav.Link className="nav-link" href="/user">
                  <i className="material-icons">person</i>
                  <p>User</p>
                </Nav.Link>
              </li>
              <li className="nav-item ">
                <Nav.Link className="nav-link" href="/home">
                  <i className="material-icons">content_paste</i>
                  <p>Forms</p>
                </Nav.Link>
              </li>
              <li className="nav-item " onClick={()=>localStorage.clear()}>
                <Nav.Link className="nav-link" href="/login">
                  <i className="material-icons">power_settings_new</i>
                  <p>Logout</p>
                </Nav.Link>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      navBar = <div></div>;
    }
    return (
      <Fragment>
<<<<<<< HEAD
       {navBar}
       <Router>
        

        
         <div className="main-panel">
         <Route exact path="/login" component={Page}/>
         <Route exact path="/home" component={Home} />
         <Route exact path ="/createSurvey" component={CreateSurvey}/>
         <Route exact path="/" component={Page} />
         <Route  path="/dashboard" component={Dashboard}/>
         <Route exact path="/user" component={User}/>
         <Route exact path="/chart" component={ResponseChart}/>
        
         </div>
       </Router>
    
       </Fragment>
     
=======
        {navBar}
        <Router>
          <div className="main-panel">
            <Route exact path="/login" component={Page} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/createSurvey" component={CreateSurvey} />
            <Route exact path="/" component={Page} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/user" component={User} />
          </div>
        </Router>
      </Fragment>
>>>>>>> 36b79fc9f1b26f03ccfa99924e8b3d0d50acf168
    );
  }
}

export default App;
