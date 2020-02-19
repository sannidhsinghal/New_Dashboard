import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconLabelButtons from "./createButton.js";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Link } from "@material-ui/core";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
    <div style={{marginTop:"10px",marginLeft:"37.5%"}}>
    <Card className={classes.root} style={{backgroundColor:"#e8eaf6"}}>
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
        className={classes.button}
        startIcon={<AddCircleIcon />}
        onClick={ event =>  window.location.href='/createSurvey'}
         >
       CREATE
      </Button>     </div>
      <CardActions />
    </Card>
    </div>
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
      <Card className={classes.root} style={{minWidth:"31%",backgroundColor:"#e0f2f1"}} >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             Survey 1
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             survey content
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      {/* <Card className={classes.root} style={{minWidth:"31%",backgroundColor:"#e0f7fa"}}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Survey 2
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             survey content
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card> */}
      {/* <Card className={classes.root} style={{minWidth:"31%",backgroundColor:"#eeeeee"}}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Survey 3
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              survey content
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card> */}
    </div>
    </div>
  );
}