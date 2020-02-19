import React,{Fragment} from "react";
import "./App.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
// import * as myimport from "./main.js";
import PrimarySearchAppBar from "./Appbar.js";
import Page from "./Page.js";

class App extends React.Component {
  render() {
  
    return (
      <Fragment>
       
      <PrimarySearchAppBar/>
       </Fragment>
     
    );
  }
}

export default App;




