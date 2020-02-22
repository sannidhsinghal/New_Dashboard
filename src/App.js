import React,{Fragment} from "react";
import "./App.css";

import PrimarySearchAppBar from "./components/Appbar.js";
import Page from "./components/Page.js";
import MediaCard from "./components/Home"
import CreateSurvey from "./components/CreateSurvey";

import Sidebar from './componentss/dashboard/Sidebar.js';
import MainPanel from './componentss/dashboard/MainPanel.js';

import {Switch, Route,Link,BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {




  render() {
  var navBar;
   if(localStorage.getItem('userId')){ 
     navBar =(
      <PrimarySearchAppBar/>
      )
    }
    else{
      navBar=(
      <div></div>
      )
    }
    return (
      <Fragment>
       {navBar}
       <Router>
         <Route exact path="/login" component={Page}/>
         <Route exact path="/home" component={MediaCard} />
         <Route exact path ="/createSurvey" component={CreateSurvey}/>
         <Route exact path="/" component={Page} /> 
         <Sidebar/>
         <MainPanel/>
       </Router>
       </Fragment>
     
    );
  }
}

export default App;




