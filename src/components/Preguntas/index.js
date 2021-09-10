import { useState } from 'react';
import './preguntas.scss'
import {Radio, RadioGroup,FormControlLabel,FormLabel,Button,MobileStepper,Paper,Typography } from '@material-ui/core';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Alert from '@material-ui/lab/Alert';
import { Collapse } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logoalteru from '../../assets/img/logoalteru.png';
import { db } from '../../firebase/config';
import { useFormik } from 'formik';
import { addDoc, collection } from '@firebase/firestore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    flexGrow: 1,
    color: 'black',
  },
  header: {
    padding:'2px',
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: '#ffffff',
  },

}));
export const Preguntas = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [count ,setCount] = useState(0);

  const formik = useFormik({
    initialValues:{
      1:{
        rta1:'',
      },
      2:{
        rta2:'',
      },
      3:{
        rta3:'',
      },
      4:{
        rta4:''
      },
      5:{
        rta5:''
      },
      6:{
        rta6:''
      },
      7:{
        rta7:''
      },
      8:{
        rta8:''
      },
      9:{
        rta9:''
      },
      10:{
        rta10:''
      },
      score:0,
    } 
  });

  const handleChange = (event) => {
    setValue(event.target.value);
      // setError(false);  
    };
  const tutorialSteps = [
    {
      label:<FormLabel component="legend" name="pregunta"> CSS significa?</FormLabel>,
      content:
    
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="option1.1" onChange={formik.handleChange}  name="1.rta1" control={<Radio />} label="Hojas de hipertexto" />
      <FormControlLabel value="true1" onChange={formik.handleChange}  name="1.rta1" control={<Radio  />} label="Hojas de estilo en cascada" />
      <FormControlLabel value="option1.2" onChange={formik.handleChange}  name="1.rta1" control={<Radio  />} label="Hojas de lenguaje marcado de hipertexto" />
    </RadioGroup>   ,
    },
    {
      label:<FormLabel component="legend">¿Las tecnologías Básicas para el desarrollo de aplicaciones web son?</FormLabel>,
      content:
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="true2" onChange={formik.handleChange}  name="2.rta2" control={<Radio />} label="HTML, CSS Y JavaScript" />
      <FormControlLabel value="option1.2" onChange={formik.handleChange}  name="2.rta2" control={<Radio />} label=" Jquery, Angular Js y JavaScript" />
      <FormControlLabel value="option2.2" onChange={formik.handleChange}  name="2.rta2" control={<Radio />} label="HTML, Bootstrap y Mysql" />
    </RadioGroup>   ,
    },
    {
      label:<FormLabel component="legend"> link rel="stylesheet" href="css/bootstrap.min.css. Este Método es para incorporar estilos a las páginas HTML?</FormLabel>,
      content:
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="option3.1" onChange={formik.handleChange}  name="3.rta3" control={<Radio />} label="Estilos CSS, incrustados en la sección HEAD" />
      <FormControlLabel value="option3.2" onChange={formik.handleChange}  name="3.rta3" control={<Radio />} label="Estilos CSS Inline" />
      <FormControlLabel value="true3" onChange={formik.handleChange}  name="3.rta3" control={<Radio />} label="Hojas de estilos CSS externa" />
    </RadioGroup>,
    },
    {
      label:<FormLabel component="legend"> De las siguientes sentencias cual hace parte de un identificador</FormLabel>,
      content:
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="option4.1" onChange={formik.handleChange}  name="4.rta4" control={<Radio />} label=".estilo1{color:red}" />
      <FormControlLabel value="option4.2" onChange={formik.handleChange}  name="4.rta4" control={<Radio />} label=" P{color:blue;}" />
      <FormControlLabel value="true4" onChange={formik.handleChange}  name="4.rta4" control={<Radio />} label="#nombre1{text-align:center}" />
    </RadioGroup>,
    },
    {
      label:<FormLabel component="legend">De las siguientes sentencias cual hace parte de una clase</FormLabel>,
      content:
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="true5" onChange={formik.handleChange}  name="5.rta5" control={<Radio />} label=".estilo1{color:red}" />
      <FormControlLabel value="option5.2" onChange={formik.handleChange}  name="5.rta5" control={<Radio />} label="#nombre1{text-align:center}" />
      <FormControlLabel value="option5.1" onChange={formik.handleChange}  name="5.rta5" control={<Radio />} label="P:hover{color:Green;}" />
    </RadioGroup>,
    },
    {
      label:<FormLabel component="legend">HTML, se escribe a través de </FormLabel>,
      content:
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="option6.1" onChange={formik.handleChange}  name="6.rta6" control={<Radio />} label="Cabecera" />
      <FormControlLabel value="true6" onChange={formik.handleChange}  name="6.rta6" control={<Radio />} label="Etiquetas" />
      <FormControlLabel value="option6.3" onChange={formik.handleChange}  name="6.rta6" control={<Radio />} label="Estilos" />
    </RadioGroup>,
    },    {
      label:<FormLabel component="legend">¿Qué significa HTML? </FormLabel>,
      content:
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="true7" onChange={formik.handleChange}  name="7.rta7" control={<Radio />} label="HyperText Markup Language" />
      <FormControlLabel value="option7.2" onChange={formik.handleChange}  name="7.rta7" control={<Radio />} label="Lenguaje de material de hiperweb" />
      <FormControlLabel value="option7.1" onChange={formik.handleChange}  name="7.rta7" control={<Radio />} label="History Totaly MyWeb Lenguage" />
    </RadioGroup>,
    },    {
      label:<FormLabel component="legend">¿Cuál de las siguientes etiquetas representa una CELDA en una tabla en HTML?</FormLabel>,
      content:
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="option8.1" onChange={formik.handleChange}  name="8.rta8" control={<Radio />} label="<tr>" />
      <FormControlLabel value="true8" onChange={formik.handleChange}  name="8.rta8" control={<Radio />} label="<td>" />
      <FormControlLabel value="option8.2" onChange={formik.handleChange}  name="8.rta8" control={<Radio />} label="<Th>" />
    </RadioGroup>,
    },    {
      label:<FormLabel component="legend"> En CSS, para cambiar el color de fondo de un elemento se usa </FormLabel>,
      content:
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="option9.1" onChange={formik.handleChange}  name="9.rta9" control={<Radio />} label="color" />
      <FormControlLabel value="option9.2" onChange={formik.handleChange}  name="9.rta9" control={<Radio />} label="bgcolor" />
      <FormControlLabel value="true9" onChange={formik.handleChange}  name="9.rta9" control={<Radio />} label="background-color" />
    </RadioGroup>,
    },
    {
      label:<FormLabel component="legend">¿JavaScript es un lenguaje que permite realizar?</FormLabel>,
      content:
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="option10.1" onChange={formik.handleChange}  name="10.rta10" control={<Radio />} label="Tanto programación del lado del servidor y del lado del cliente." />
      <FormControlLabel value="true10" onChange={formik.handleChange}  name="10.rta10" control={<Radio />} label="Programación del lado del cliente" />
      <FormControlLabel value="option10.2" onChange={formik.handleChange}  name="10.rta10" control={<Radio />} label="Ninguna de las anteriores" />
      <Button
        disabled={open}
        variant="outlined"
        onClick={handleSubmit}>
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

const handleBack = () => {
  setActiveStep((prevActiveStep) => prevActiveStep - 1);
};
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
  }else if (value === "true5"){
    setCount (count +1)
  }else if (value === "true6"){
    setCount (count +1)
  }else if (value === "true7"){
    setCount (count +1)
  }else if (value === "true8"){
    setCount (count +1)
  }else if (value === "true9"){
    setCount (count +1)
  }else{
    setCount (count + 0)
  }

};
async function handleSubmit(e) {
    if (value === "true10"){
    setCount (count + 1 );
  }
    setOpen(true);
    console.log(formik.values);
    e.preventDefault();
    console.log("Click Firebase");
    try {
      const docRef = await addDoc(collection(db, "Preguntas"), {
        1:{
          rta1:formik.values[1].rta1
        },
        2:{
          rta2:formik.values[2].rta2
        },
        3:{
          rta3:formik.values[3].rta3
        },
        4:{
          rta4:formik.values[4].rta4
        },
        5:{
          rta5:formik.values[5].rta5
        },
        6:{
          rta6:formik.values[6].rta6
        },
        7:{
          rta7:formik.values[7].rta7
        },
        8:{
          rta8:formik.values[8].rta8
        },
        9:{
          rta9:formik.values[9].rta9
        },
        10:{
          rta10:formik.values[10].rta10
        },
        score:count
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

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
        <Alert>
      <h1 >Tu puntaje es: {count}</h1>
        </Alert>
      </Collapse>
     
     </div>
     );
};