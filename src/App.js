import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page from "./components/Page.js";
import Home from "./components/Home";
import CreateSurvey from "./components/CreateSurvey";
import Dashboard from './componentss/dashboard/Dashboard.js';
import User from './componentss/dashboard/User.js';
import {Nav} from 'react-bootstrap';
import ResponseDetails from './components/ResponseDetails.js';
import PreviewSurvey from './componentss/Preview/PreviewSurvey.js';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { Redirect} from "react-router-dom";
import NotFoundPage from './componentss/404Page';
import { Link } from 'react-router-dom';



import ResponseTable from "./components/ResponseTable";


class App extends React.Component {
 
    submit = () => {
      confirmAlert({
        title: 'Confirm to logout',
        message: 'Are you sure to logout?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => alert('logout please' )
        },
          {
            label: 'No'
          }
        ]
      });
     
    };

render(){
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
              <li className="nav-item">
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
             
              <li className="nav-item " onClick={this.submit}>
              
                  <i className="material-icons">power_settings_new</i>
                  <p>Logout</p>
                
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

        {navBar}
        <Router>
          <div className="main-panel">
            <Route exact path="/login" component={Page} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/createSurvey" component={CreateSurvey} />
            <Route exact path="/" component={Page} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/user" component={User} />
            <Route exact path="/response" component={ResponseTable}/>
           <Route exact path="/responseDetails" component={ResponseDetails}/>
           <Route exact path="/preview" component={PreviewSurvey}/>
           <Route path="*" component={NotFoundPage} />
            
          </div>
        </Router>
      </Fragment>

    );
  }
}

export default App;
