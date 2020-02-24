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
    <div style={{marginTop:"10px",marginLeft:"37.5%"}}>
    <Card  style={{backgroundColor:"#e8eaf6", maxWidth: "345"}}>
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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft:"70px",
        paddingRight:"70px",
        paddingTop:"45px",
      }}
    >
    
        <Card key={res.id} style={{minWidth:"31%",backgroundColor:"#e0f2f1", maxWidth: "345"}} >
          <Figure>
            <Figure.Image
            src={res.imagePath}
            fluid>
              </Figure.Image>
              </Figure>
              <Typography gutterBottom variant="h5" component="h2">

           {res.name}
            {res.description}
            </Typography>
      </Card>
      </div>
          )})}

      </div>
    
  );
}}
export default Home