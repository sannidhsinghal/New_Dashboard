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
              <div className="col-md-6" key={params.id}>
                <Card key={params.id}>
                  <Figure>
                    <Figure.Image src={params.imagePath} fluid></Figure.Image>
                  </Figure>
                  <Card.Body>
                    <Card.Title>{params.name}</Card.Title>
                    <Card.Text>
                      <br />
                      {params.description}
                      <br />
                      <label>Created On:</label>
                      {"   "}
                      {params.createdDt.slice(0, 10)}
                      <br />
                    </Card.Text>
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
