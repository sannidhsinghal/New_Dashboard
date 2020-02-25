import React,{Component} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Figure from "react-bootstrap/Figure";
import Typography from "@material-ui/core/Typography";
import IconLabelButtons from "./createButton.js";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Link } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import {dataGet} from "./GetData"

 class Home extends Component{
  constructor() {
    super();
    this.state = {
      surveys: [],
    };
  }

    componentDidMount(){
    dataGet("/survey/surveys/"+localStorage.getItem("userId"))
    .then(response => {
      this.setState({
        surveys: response
      });
      console.log(this.state.surveys)
    })
    .catch(function(error){
      console.log(error);
    });
  }
 
  render(){
  return (
    <div>
    <div className="col-md-9" style={{marginTop:"10px",marginLeft:"15%"}}>
    <Card  style={{backgroundColor:"#e8eaf6", maxWidth: "38"}}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            style={{ textAlign: "center" }}
          >
            Create Survey !
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            style={{ textAlign: "center" }}
          >
            Create customized surveys
          </Typography>
        </CardContent>
      </CardActionArea>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        // className={classes.button}
        startIcon={<AddCircleIcon />}
        onClick={ event =>  window.location.href='/createSurvey'}
         >
       CREATE
      </Button>    
       </div>
      <CardActions />
    </Card>
    </div>

    {this.state.surveys.map(res=>{
          return(

        <div className="content">
        <div className="container-fluid">
              <div className="row">
            <div className="col-md-6">
              <div className="card card-chart" key={res.id}>
                <div className="card-header ">
                 
                  <Figure>
            <Figure.Image
            src={res.imagePath}
            fluid>
              </Figure.Image>
              </Figure>
                </div>
                <div className="card-body">
                  <h4 className="card-title">{res.name}</h4>
                  <p className="card-category">
                  {res.description}</p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons"></i>we can add more fields
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-6">
              <div className="card card-chart">
                <div className="card-header ">
                  <p>put image inside this div and remove this p tag</p>
                  
                </div>
                <div className="card-body">
                  <h4 className="card-title">Title</h4>
                  <p className="card-category">description</p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    anything else we want to add
                   
                  </div>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
     























































































































































      
    
          )})}

      </div>
    
  );
}}
export default Home