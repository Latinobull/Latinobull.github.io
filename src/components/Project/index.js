import React from 'react';
import Revitalize from './Revitalize-Logo.png';
import AudioBridge from './AudioBridge.png';
import HungerBuster from './Hunger-Buster.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './style.css';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 300,
  },
});
export default function Project() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1 className="uk-align-center">Projects</h1>
      </Grid>
      <Grid container>
        <Grid item lg={4} md={12}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={HungerBuster}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Hunger Busters
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This application was created to help those who never knows
                  what they want to eat. With Hunger Busters, we help you decide
                  everything with a click of a button. When you click the random
                  food button, you are presented with a random food photo. After
                  the photo has appeared on the page, three restaurants in your
                  location would appear on the page. The restaurants change
                  depending on which cuisine is showed in the image. When you
                  are satisifed with your random food selection, you are then
                  able to send a copy of the restaurants to your email.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/carolineablynch/Hunger-Buster"
              >
                Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://carolineablynch.github.io/Hunger-Buster"
              >
                Application
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4} md={12}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={AudioBridge}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  AudioBridge
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  As a person passionate about music, I want to have the ability
                  to join an online community so that I can connect with other
                  like-minded individuals.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/ericfreyer/Project_2"
              >
                Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://hidden-castle-67810.herokuapp.com/"
              >
                Application
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4} md={12}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Revitalize}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Revitalize
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  AS someone who works in the tech industry I WANT TO have a
                  safe space where I can take a step back from working on
                  challenging problems and focus on my overall wellness by
                  practicing self care SO THAT I can protect myself from the
                  damaging effects of stress, improve my job satisfaction, and
                  bolster my well-being on and off the job.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/Latinobull/Revitalize"
              >
                Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://shielded-caverns-11387.herokuapp.com/"
              >
                Application
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
