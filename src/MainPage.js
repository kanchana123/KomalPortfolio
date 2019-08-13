import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import MobileStepper from '@material-ui/core/MobileStepper';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import  { Button, Typography, Paper, MobileStepper } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import { illustration, krishnapainting, tradingtastes, firstpage, shahrukh, pack4 } from './images.js'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const tutorialSteps = [
  {
    label: 'Calender Design',
    imgPath: firstpage,
  },
  {
    label: 'Packeging',
    imgPath: pack4,
  },
  {
    label: 'TradingTastes Logo',
    imgPath: tradingtastes,
  },
  {
    label: 'Krishna 2D Painting',
    imgPath: krishnapainting,
  },
  {
    label: 'Cartoon Shahrukh',
    imgPath: shahrukh,
  },
  {
    label: 'Illustration',
    imgPath: illustration,
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    // height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    // height: 255,
    display: 'block',
    // maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{width: "100%"}}
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>

            {Math.abs(activeStep - index) <= 2 ? (
              <div style={{backgroundImage:  `url(${step.imgPath})`, width: "100%", height: window.innerHeight-150, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                  <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    style={{backgroundColor: "rgb(0,0,0,0)", float: "left", width: "100%", marginTop: window.innerHeight-150, color: "white"}}
                    nextButton={
                      <Button size="small" style={{color: "aqua"}} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                      </Button>
                    }
                    backButton={
                      <Button size="small" style={{color: "rgb(155, 89, 182)"}} onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                      </Button>
                    }
                  />
                </div>

            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
  );
}

export default SwipeableTextMobileStepper;
