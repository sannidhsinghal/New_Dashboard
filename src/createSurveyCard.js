import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconLabelButtons from "./createButton.js";
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
        <IconLabelButtons />
      </div>
      <CardActions />
    </Card>
    </div>
  );
}