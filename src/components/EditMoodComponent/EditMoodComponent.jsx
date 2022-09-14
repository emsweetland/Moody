import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
//MUI stuff
import { IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function EditMoodComponent(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const history = useHistory();
  const dispatch = useDispatch();

   const [moodResponse, setMoodResponse] = useState(0)

   const handleMood = (event) => {
     console.log(event.target.value);
     setMoodResponse(parseInt(event.target.value));
   };

     const handleNext = (event) => {
       event.preventDefault();
       dispatch({
         type: 'EDIT_MOOD',
         payload: moodResponse
       });history.push('/review')
     }

  return (
    <div>
      <h2>an old reflection :)</h2>
      <h3>pick a mood</h3>

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="i tried my best"
          name="radio-buttons-group"
          onChange={handleMood}>
          <FormControlLabel value="1" control={<Radio />} label="tired" />
          <FormControlLabel value="2" control={<Radio />} label="epic" />
          <FormControlLabel value="3" control={<Radio />} label="grumpy" />
          <FormControlLabel value="4" control={<Radio />} label="devastated" />
        </RadioGroup>
      </FormControl>

      <IconButton aria-label="next">
      <NavigateNextIcon onClick={handleNext}/>
      </IconButton>
    </div>
  );
}

export default MoodComponent;