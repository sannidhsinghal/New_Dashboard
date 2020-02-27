import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "react-bootstrap/Card";
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
import { dataGet } from "./GetData";
import { Row } from "react-bootstrap";


class Home extends Component {
  constructor() {
    super();
    this.state = {
      surveys: []
    };
  }

  componentDidMount() {
    dataGet("/survey/surveys/" + localStorage.getItem("userId"))
      .then(response => {
        this.setState({
          surveys: response
        });
        console.log(this.state.surveys);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div
          className="col-md-9"
          style={{ marginTop: "10px", marginLeft: "15%" }}
        >
          <Card style={{ backgroundColor: "#e8eaf6", maxWidth: "38" }}>
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
                onClick={event => (window.location.href = "/createSurvey")}
              >
                CREATE
              </Button>
            </div>
            <CardActions />
          </Card>
        </div>
        <Row>
          {this.state.surveys.map(params => {
            return (
              <div className="col-md-4"  key={params.id}>
               <Card  key={params.id}>
                  <img  src={params.imagePath} style={{width:"250px", height:"220px", display:"block", margin:"0 auto", marginTop:"20px", borderStyle:"solid", borderColor: "grey"}}/>
                <Card.Body>
                <Card.Title style={{textAlign:"center", color:"purple" }}><b>{params.name}</b></Card.Title>
                <Card.Text>
                  <div style={{textAlign:"center"}}>
                {params.description}
                </div>
                  </Card.Text>
                  <div style={{textAlign:"center"}}>
                      <label>Created On:</label>
                      {"   "}
                      {params.createdDt.slice(0, 10)}
                      </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Row>
      </div>
    );
  }
}
export default Home;
