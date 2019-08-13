import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { IconButton, Grid, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import _ from 'lodash'

import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import MainPage from './MainPage'

import About from './About'
import Contact from './Contact'
import Education from './Education'
// import Projects from './Projects'
import ProjectCard from './ProjectCard'
import ProjectDetails from './ProjectDetails'
import Projects from './pictures'
// import Resume from './resume2018.pdf'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  projectDetails: {
    float: "left",
    width: "100%",
    height: "100%",
    left: 0,
    top: 40,
    overflow: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    display: 'none',
    position: 'fixed',
    zIndex: 1,
    backgroundColor: "rgb(0, 0, 0, 0.3)"
  }
}));

// onClick={() => {window.open(Resume)}}

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [projectDetails, setProjectDetails] = React.useState({});

  const [activeMenu, setActiveMenu] = React.useState(0);

  // function handleChoosingMenu() {
  //   setActiveMenu()
  // }

  function componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  function handleScroll() {
    console.log("scroll event");
  }

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleProjectDetails(project) {
    console.log("handleProjectDetails called");
    handleDrawerClose()
    setProjectDetails(project)
    if (document.getElementById("projectDetails")) {
      document.getElementById("projectDetails").style.display = "block"
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{backgroundColor: "rgb(27, 8, 66)", boxShadow: "none"}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            style={{color: "#DA2FD0"}}
          >
            <MenuIcon />
            <h2 style={{margin: 0, marginLeft: 20, fontFamily: "fantasy"}}>Komal Nannavare</h2>
          </IconButton>
          <div className={clsx(classes.menuButton, open && classes.hide)} style={{display: "block", float: "right", width: "100%"}}>
            <div style={{display: "inline-flex", float: "right"}}>
              <Typography style={{fontSize: 25, color: "rgb(26, 188, 156)", marginLeft: 10, marginRight: 20}}>Graphic Designer</Typography>
              <Button size="small" variant="outlined" style={{borderColor: "rgb(26, 188, 156)", color: "rgb(26, 188, 156)", float: "right"}}>Resume</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}

      >
        <div style={{backgroundImage: "url(https://wallpaperaccess.com/full/6506.jpg)", objectFit: "cover", width: "100%", height: "100%", color: "#61dafb"}}>
        <div className={classes.drawerHeader}  >
          <h2 style={{color: "#DA2FD0", fontFamily: "fantasy"}} onClick={() => setActiveMenu(0)}>Komal Nannavare</h2>
          <IconButton onClick={handleDrawerClose} style={{color: "#DA2FD0"}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        <Router>
          <List>

            {['CorelDraw', 'Illustrator', 'Paintings & Sketches'].map((text, index) => (
              <ListItem button key={text} onClick={() => setActiveMenu(index+1)} style={{color: activeMenu === index+1 ? "rgb(155, 89, 182)" : "#61dafb"}}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Router>
        <Divider />
        <List>
          {['About Me', 'Education', 'Contact Me'].map((text, index) => (
            <ListItem button key={text} onClick={() => setActiveMenu(index+4)} style={{color: activeMenu === index+4 ? "rgb(155, 89, 182)" : "#61dafb"}}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
        style={{backgroundColor: "rgb(27, 8, 66)", width: "100%"}}
        onScroll={() => {
          console.log("scrolled");
        }}
      >
        <div className={classes.drawerHeader}/>
        <div style={{height: window.innerHeight-100, width: "100%", display: activeMenu === 0 ? "block" : "none"}}>
          <MainPage/>
        </div>
        <div id="projectDetails" className={classes.projectDetails}>
          <ProjectDetails project={projectDetails}/>
        </div>

        <div style={{height: window.innerHeight-100, overflowY: "scroll", display: activeMenu === 1 || activeMenu === 0 ? "block" : "none"}}>
          <Typography variant="h4" style={{color: "aqua", marginBottom: 30}}>CorelDraw</Typography>
          <Grid items container spacing={32}>
            {_.map(_.filter(Projects, ['menu', 'corel']), project => {
              console.log("project", project);
              return <Grid item lg={4} md={6} xs={12}>
                        <ProjectCard project={project} handleDetails={handleProjectDetails}/>
                      </Grid>
            })}
          </Grid>
        </div>
        <div style={{height: window.innerHeight-100, overflowY: "scroll", display: activeMenu === 2 || activeMenu === 0 ? "block" : "none"}}>
          <Typography variant="h4" style={{color: "aqua", marginBottom: 30, marginTop: 10}}>Illustrator</Typography>
            <Grid items container spacing={32}>
              {_.map(_.filter(Projects, ['menu', 'illustrator']), project => {
                console.log("project", project);
                return <Grid item lg={4} md={6} xs={12}>
                          <ProjectCard project={project} handleDetails={handleProjectDetails}/>
                        </Grid>
              })}
            </Grid>
        </div>
        <div style={{height: window.innerHeight-100, overflowY: "scroll", display: activeMenu === 3 || activeMenu === 0 ? "block" : "none"}}>
          <Typography variant="h4" style={{color: "aqua", marginBottom: 30, marginTop: 10}}>Paintings</Typography>
            <Grid items container spacing={32}>
              {_.map(_.filter(Projects, ['menu', 'painting&sketch']), project => {
                console.log("project", project);
                return <Grid item lg={4} md={6} xs={12}>
                          <ProjectCard project={project} handleDetails={handleProjectDetails}/>
                        </Grid>
              })}
            </Grid>
        </div>
        <div style={{height: window.innerHeight-100, overflowY: "scroll", width: "100%", display: activeMenu === 4 || activeMenu === 0 ? "block" : "none"}}>
          <Typography variant="h4" style={{color: "aqua", marginBottom: 30, marginTop: 10}}>About Me</Typography>
          <About/>
        </div>
        <div style={{height: window.innerHeight-100, overflowY: "scroll", width: "100%", display: activeMenu === 5 || activeMenu === 0 ? "block" : "none"}}>
          <Typography variant="h4" style={{color: "aqua", marginBottom: 30, marginTop: 10}}>Education</Typography>
          <Education style={{margin: 20}}/>
        </div>
        <div style={{height: window.innerHeight-100, overflowY: "scroll", width: "100%", display: activeMenu === 6 || activeMenu === 0 ? "block" : "none"}}
          onScroll={(e) => {console.log("scrolled contact", e);}}>
          <Contact/>
        </div>


      </main>

    </div>
  );
}
