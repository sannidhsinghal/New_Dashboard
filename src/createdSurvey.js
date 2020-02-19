import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

export default function SurveyMade() {
  const classes = useStyles();

  return (
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

      <Card className={classes.root} style={{minWidth:"31%",backgroundColor:"#e0f7fa"}}>
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
      </Card>
      <Card className={classes.root} style={{minWidth:"31%",backgroundColor:"#eeeeee"}}>
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
      </Card>


    </div>
  );
}
