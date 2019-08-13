import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    backgroundColor: "rgb(0,0,0,0)"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Graphic Design Course', 'High School', '10th Grade SSC'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <div>
                <Typography color="secondary">
                  Jagannath Rathi Vocational Guidance & Training Institute.
                </Typography>
                <Typography color="secondary">
                  1 year Graphic Design Course
                </Typography>
              </div>;
    case 1:
      return <div>
                <Typography color="secondary">
                  MES Abasaheb Garware College
                </Typography>
                <Typography color="secondary">
                    HSC Arts
                </Typography>
              </div>
    case 2:
      return  <div>
                <Typography color="secondary">
                  Swami Vivekanand Vidyalay Asade
                </Typography>
                <Typography color="secondary">
                    SSC
                </Typography>
              </div>
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function componentDidMount() {
    setActiveStep(1)
    setActiveStep(2)
  }

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  // {steps.map((label, index) => (
  //   <Step  color="secondary" key={label}>
  //     <StepLabel completed={true}>
  //       <span style={{color: "rgb(155, 89, 182)"}}>
  //         {label}
  //       </span>
  //     </StepLabel>
  //     <StepContent completed={true}>
  //       {getStepContent(index)}
  //     </StepContent>
  //   </Step>
  // ))}

  return (

    <div style={{width: "90%", minWidth: 300, marginLeft: "5%", marginRight: "5%"}}>
      <Stepper activeStep={[]} orientation="vertical" style={{backgroundColor: "rgb(0, 0, 0, 0)"}}>
        <Step  color="secondary" key="Graphic Design Course">
          <StepLabel completed={true}>
            <span style={{ color: "#DA2FD0", fontSize: 20}}>
              Jagannath Rathi Vocational Guidance & Training Institute.
            </span>
            <br/>
            <span style={{ color: "#DA2FD0", fontSize: 18}}>
              Graphic Design Course
            </span>
          </StepLabel>
          <StepContent completed={true}>
            <div>
                <Typography color="secondary">
                  Jagannath Rathi Vocational Guidance & Training Institute
                </Typography>

                <Typography color="secondary">
                  1 year Graphic Design Course
                </Typography>
              </div>
          </StepContent>
        </Step>
        <Step  color="secondary" key="High School">
          <StepLabel completed={true}>
            <span style={{color: "#DA2FD0", fontSize: 20}}>
              MES Abasaheb Garware College
            </span>
            <br/>
            <span style={{color: "#DA2FD0", fontSize: 18}}>
              HSC Arts
            </span>
          </StepLabel>
          <StepContent completed={true}>
            <div>
              <Typography color="secondary">
                MES Abasaheb Garware College
              </Typography>
              <Typography color="secondary">
                  HSC Arts
              </Typography>
            </div>
          </StepContent>
        </Step>
        <Step  color="secondary" key="10th Grade SSC">
          <StepLabel completed={true}>
            <span style={{color: "#DA2FD0", fontSize: 20}}>
              Swami Vivekanand Vidyalay Asade
            </span>
            <br/>
            <span style={{color: "#DA2FD0", fontSize: 18}}>
              10th Grade SSC
            </span>
          </StepLabel>
          <StepContent completed={true}>
            <div>
              <Typography color="secondary">
                Swami Vivekanand Vidyalay Asade
              </Typography>
              <Typography color="secondary">
                  SSC
              </Typography>
            </div>
          </StepContent>
        </Step>
      </Stepper>
    </div>

  );
}
