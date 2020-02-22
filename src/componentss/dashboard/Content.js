import React from 'react';
import {Switch, Route,Link,BrowserRouter as Router} from 'react-router-dom';
import Dashboard from './Dashboard.js';
import User from './User.js';
import SurveyTable from './SurveyTable.js';



function  Content() {
  return (

           
       <Switch>
         <Route exact path="/" component={Dashboard}/>
         <Route  path="/dashboard" component={Dashboard}/>
         <Route exact path="/user" component={User}/>
         <Route exact path="/surveytable" component={SurveyTable}/>



       </Switch>

    
  );
}

export default Content;
