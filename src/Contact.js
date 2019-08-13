import React from 'react';
// import { Grid, TextField, Typography, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

import Facebook from './Images/Facebook.ico'
import {Mail} from '@material-ui/icons'

import axios from 'axios'

class Contact extends React.Component {
  state = {email: "", message: "", success: null, email_success: ""}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  sendMail = (e) => {
    e.preventDefault()
    console.log("send mail called");
    axios.post('/send/mail', {email: this.state.email, message: this.state.message})
    .then((res) => {
      this.setState({email_success: res.data.msg})
      console.log("email", res.data.msg);
    })
    .catch(err => {
      this.setState({success: false})
      console.log("err", err);
    })
  }
  render() {
    return (
      <div>
        <Typography variant="body2" style={{color: "rgb(26, 188, 156)", textAlign: "center", fontSize: 20, fontFamily: "fantasy", fontWeight: "bold"}}>
          "Creativity is contagious, pass it on."
          <br/>
          <br/>
          - Albert Einstein
        </Typography>
        <br/>
        <Typography variant="h3" style={{color: "#DA2FD0", fontFamily: "serif", margin: 15}}>
          Let's create something together!
        </Typography>
        <br/>
        <Grid items container spacing={32}>
          <Grid item lg={6} sm={6} xs={12}>
            <Typography variant="h5" style={{color: "aqua"}}>
              Message me
            </Typography>
            <br/>
            <TextField
              name="email"
              label="Email"
              value={this.state.email}
              onChange={this.handleChange}
              style={{color: "#DA2FD0", margin: 10, backgroundColor: "white", width: "80%"}}
              required
              />
            <br/>
            <TextField
              name="message"
              label="Message"
              value={this.state.message}
              onChange={this.handleChange}
              style={{fontColor: "#DA2FD0", margin: 10, backgroundColor: "white", width: "80%"}}
              multiline
              minRow={5}
              rows={5}
              required
              />
            <br/>

            <Button variant="outlined" disabled={!this.state.email || !this.state.message} style={{color: !this.state.email || !this.state.message ? "violet" : "rgb(218, 47, 208)", borderColor: !this.state.email || !this.state.message ? "violet" : "rgb(218, 47, 208)", margin: 10}} onClick={this.sendMail}>Send</Button>
              <Typography variant="h6" style={{color: "violet", margin: 10}}>
                {this.state.email_success}
              </Typography>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <div style={{marginTop: 50}}>
              <Typography variant="h6" style={{color: "aqua", margin: 10}}>
                City: Pune
              </Typography>
              <Typography variant="h6" style={{color: "aqua", margin: 10}}>
                Phone: +91 7498299914
              </Typography>
              <Typography variant="h6" style={{color: "aqua", margin: 10}}>
                Gmail: nannavarekomal890@gmail.com
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

}

// <Typography variant="h6" style={{color: "#DA2FD0", margin: 10}}>
//   Connect with
// </Typography>
// <img src={Facebook} style={{width: 30, height: 30, margin: 5}}/>
// <Mail style={{color: "#FF5733", width: 30, height: 30, margin: 5}}/>


export default Contact;
