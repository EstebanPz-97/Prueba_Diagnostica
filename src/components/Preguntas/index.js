import { useState } from 'react';
import './preguntas.scss'
import {Radio, RadioGroup,FormControlLabel,FormLabel,Button,MobileStepper,Paper,Typography } from '@material-ui/core';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Alert from '@material-ui/lab/Alert';
import { Collapse } from '@material-ui/core';
import { IconButton} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
import logoalteru from '../../assets/img/logoalteru.png';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    flexGrow: 1,
  },
  header: {
    padding:'2px',
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: '#5E35B1',
  },

}));
export const Preguntas = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [count ,setCount] = useState(0)
  const handleChange = (event) => {
    setValue(event.target.value);
      // setError(false);  
    };
  const tutorialSteps = [
    {
      label:<FormLabel component="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis consequuntur molestias numquam, dolore facilis corrupti ea voluptas quaerat voluptate assumenda laborum quas illo nisi culpa, distinctio aperiam dolor veritatis?</FormLabel>,
      content:
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="option1.1" control={<Radio />} label="lorem" />
      <FormControlLabel value="true1" control={<Radio />} label="lorem" />
      <FormControlLabel value="option1.2" control={<Radio />} label="lorem" />
    </RadioGroup>   ,
    },
    {
      label:<FormLabel component="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis consequuntur molestias numquam, dolore facilis corrupti ea voluptas quaerat voluptate assumenda laborum quas illo nisi culpa, distinctio aperiam dolor veritatis?</FormLabel>,
      content:
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="true2" control={<Radio />} label="lorem" />
      <FormControlLabel value="option1.2" control={<Radio />} label="lorem" />
      <FormControlLabel value="option2.2" control={<Radio />} label="lorem" />
    </RadioGroup>   ,
    },
    {
      label:<FormLabel component="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis consequuntur molestias numquam, dolore facilis corrupti ea voluptas quaerat voluptate assumenda laborum quas illo nisi culpa, distinctio aperiam dolor veritatis?</FormLabel>,
      content:
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="option3.1" control={<Radio />} label="lorem" />
      <FormControlLabel value="option3.2" control={<Radio />} label="lorem" />
      <FormControlLabel value="true3" control={<Radio />} label="lorem" />
    </RadioGroup>,
    },
    {
      label:<FormLabel component="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis consequuntur molestias numquam, dolore facilis corrupti ea voluptas quaerat voluptate assumenda laborum quas illo nisi culpa, distinctio aperiam dolor veritatis?</FormLabel>,
      content:
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="option4.1" control={<Radio />} label="lorem" />
      <FormControlLabel value="true4" control={<Radio />} label="lorem" />
      <FormControlLabel value="option4.2" control={<Radio />} label="lorem" />
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Terminado
      </Button>
    </RadioGroup>

    ,
    },
  ];
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = tutorialSteps.length;
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (value === "true1"){
      setCount (count + 1 );
    } else if (value === "true2") {
      setCount (count + 1 );
    }else if (value === "true3"){
      setCount(count + 1)
    }else if (value === "true4"){
      setCount (count +1)
    }else{
      setCount (count + 0)
    }

  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
    return (
         <div className="container-quiz">
           <img src={logoalteru} alt="logo"/>
        <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <Typography>{tutorialSteps[activeStep].content}</Typography>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>

      <Collapse in={open}>
        <Alert
          action={
            <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
            >

              <Close fontSize="inherit" />
            </IconButton>
          }
          >
      <h1>Tu puntaje es: {count}</h1>
        </Alert>
      </Collapse>
     
     </div>
     );
};