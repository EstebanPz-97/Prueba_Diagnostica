import { useState } from 'react';
import './preguntas.scss'
import { Radio, RadioGroup,FormControlLabel,FormControl,FormLabel,Button } from '@material-ui/core';

export const Preguntas = () => {
    const [value, setValue] = useState("");
    const [error, setError]= useState(false);
    const [count ,setConunt] = useState(0)

    const handleChange = (event) => {
      setValue(event.target.value);
      setError(false);  
    };
    const handleSubmit = (event) =>{
      event.preventDefault();
      if (value === "true"){
        setConunt (count + 1 );
        setError(false);
      }else{
        setConunt (count + 0 );
        setError(true);
      }
      console.log(count);


    }
     return (
         <div className="container-quiz">
          <form onSubmit={handleSubmit}> 
           <FormControl component="fieldset">
     <li> <FormLabel component="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis consequuntur molestias numquam, dolore facilis corrupti ea voluptas quaerat voluptate assumenda laborum quas illo nisi culpa, distinctio aperiam dolor veritatis?</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="option1" control={<Radio />} label="lorem" />
        <FormControlLabel value="true" control={<Radio />} label="lorem" />
        <FormControlLabel value="option2" control={<Radio />} label="lorem" />
      </RadioGroup>
      </li>
      <li> <FormLabel component="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis consequuntur molestias numquam, dolore facilis corrupti ea voluptas quaerat voluptate assumenda laborum quas illo nisi culpa, distinctio aperiam dolor veritatis?</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="true" control={<Radio />} label="lorem" />
        <FormControlLabel value="false" control={<Radio />} label="lorem" />
        <FormControlLabel value="false" control={<Radio />} label="lorem" />
      </RadioGroup>
      </li> <li> <FormLabel component="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis consequuntur molestias numquam, dolore facilis corrupti ea voluptas quaerat voluptate assumenda laborum quas illo nisi culpa, distinctio aperiam dolor veritatis?</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="false" control={<Radio />} label="lorem" />
        <FormControlLabel value="false" control={<Radio />} label="lorem" />
        <FormControlLabel value="true" control={<Radio />} label="lorem" />
      </RadioGroup>
      </li> <li> <FormLabel component="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis consequuntur molestias numquam, dolore facilis corrupti ea voluptas quaerat voluptate assumenda laborum quas illo nisi culpa, distinctio aperiam dolor veritatis?</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="false" control={<Radio />} label="lorem" />
        <FormControlLabel value="true" control={<Radio />} label="lorem" />
        <FormControlLabel value="false" control={<Radio />} label="lorem" />
      </RadioGroup>
      </li>
      <Button type="submit" variant="outlined" color="primary" className="button">
        Siguiente
        </Button>
    </FormControl>

    </form>
         </div>
     );
};