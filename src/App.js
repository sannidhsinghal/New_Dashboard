import React,{Fragment} from "react";
import "./App.css";
import {BrowserRouter as Router,Route} from "react-router-dom";
import PrimarySearchAppBar from "./components/Appbar.js";
import Page from "./components/Page.js";
import MediaCard from "./components/Home"
import CreateSurvey from "./components/CreateSurvey";

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
       </Router>
       </Fragment>
     
    );
  }
}

export default App;




