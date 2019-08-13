import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import komal from './Images/komal.jpg'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


function About() {
  return (
    <div style={{width: "90%", minWidth: 300, marginLeft: "5%", marginTop: 50}}>
      <Grid items container spacing={32}>
        <Grid item sm={6} xs={12}>
          <Avatar src={komal} style={{width: 300, height: 300}}/>
          <br/>
          <Typography variant="body2" style={{color: "rgb(26, 188, 156)", textAlign: "center", fontSize: 20, fontFamily: "fantasy", fontWeight: "bold"}}>
            “Art enables us to find ourselves and lose ourselves at the same time.”
            <br/><br/>
            - Thomad Merton
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <br/>
          <Typography variant="subtitle1" style={{textAlign: "center", fontSize: 20, fontFamily: "fantasy", color: "violet"}}>
            Hello!
            <br/>
            I am an artist at heart and a graphic designer by profession.
            I have done all kinds of artistic work just out of my passion for creativity.
          </Typography>
          <br/>
          <Typography variant="subtitle1" color="primary" style={{textAlign: "center", fontSize: 20, fontFamily: "fantasy", color: "violet"}}>
            I am looking for graphic design projects so that I could touch as many souls as possible with my art and creativity.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}


export default About;
