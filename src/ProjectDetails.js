import React from 'react';
import { Card, CardMedia, CardContent, Typography, Fab, Grid } from '@material-ui/core'
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash'

import { Close } from '@material-ui/icons'

import image from './Images/krishnapainting.jpg'

import { painting3d, birdsketch, catsketch, dnyaneshwar, girlsketch,
          krishnapainting, shahrukh, shiva, tradingtastes } from './images.js'

          // import painting3d from './Images/3dpainting.jpg'
          // import birdsketch from './Images/birdsketch.jpg'
          // import catsketch from './Images/catsketch.jpg'
          // import dnyaneshwar from './Images/dnyaneshwar.jpg'
          // import girlsketch from './Images/girlsketch.jpg'
          // import krishnapainting from './Images/krishnapainting.jpg'
          // import shahrukh from './Images/shahrukh.jpg'
          // import shiva from './Images/shiva.jpg'
          // import tradingtastes from './Images/tradingtastes.jpg'


const useStyles = makeStyles(theme => ({
  card: {
    width: "90%",
    height: 550,
    margin: "5%"
  },
  media: {
    height: 200,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProjectDetails(props) {
    const classes = useStyles();

    return (
      <div>
        <Card className={classes.card} style={{height: window.innerHeight-100}}>
          <Fab aria-label="Close" className={classes.fab} size="small"
            style={{float: "right", backgroundColor: "white",
            position: "relative", marginTop: 10, marginRight: 10}}
            onClick={() => {
              document.getElementById("projectDetails").style.display = "none"
            }}>
              <Close />
          </Fab>
          <CardContent style={{height: 550, overflowY: "scroll", width: "100%"}}>
            <Grid items container spacing={32}>
              <Grid item sm={3} xs={12}>
                <Typography variant="h5" color="textSecondary" component="p">
                  {_.get(props.project, "name", "")}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {_.get(props.project, "description", "")}
                </Typography>
                <img src={_.get(props.project, "image", krishnapainting)} width="100%" height="auto" style={{borderColor: "black", borderWidth: 5, borderStyle: "solid", marginTop: 10}}/>
              </Grid>
              <Grid item sm={9} xs={0} style={{display: window.innerWidth < 700 ? "none" : "block"}}>
                <img src={_.get(props.project, "image", krishnapainting)} width="100%" height="auto"/>
              </Grid>
            </Grid>
         </CardContent>
        </Card>
      </div>
    );

}
