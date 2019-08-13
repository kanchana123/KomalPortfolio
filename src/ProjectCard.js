import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash'

import image from './Images/krishnapainting.jpg'

import * as pictures from './images.js'

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
    width: "96%",
    height: 300,
    margin: "2%",
    borderColor: "rgb(155, 89, 182)",
    borderWidth: 0.5,
    borderStyle: "solid",
    cursor: "pointer"
  },
  media: {
    height: 250,
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

export default function ProjectCard(props) {
    const classes = useStyles();
    console.log("pitcures", pictures);
    return (
      <div>
        <Card className={classes.card} onClick={() => props.handleDetails(props.project)}>
          <div>
            <CardMedia
              className={classes.media}
              image={_.get(props.project, "image", krishnapainting)}
              title={_.get(props.project, "name", "")}
            />
            <CardContent style={{backgroundColor: "rgb(27, 8, 66)"}}>
             <Typography variant="body2" color="textSecondary" component="p" style={{color: "deepskyblue"}}>
               {_.get(props.project, "name", "")}
             </Typography>
           </CardContent>
         </div>
        </Card>
      </div>
    );

}
