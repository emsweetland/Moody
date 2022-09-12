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
function MoodComponent(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const history = useHistory();
  const dispatch = useDispatch();

  const [moodResponse, setMoodResponse] = useState('')

  const handleMood = (event) => {
    console.log(event.target.value);
    setMoodResponse(event.target.value)
    console.log(moodResponse)
  };

    const handleNext = (event) => {
      event.preventDefault();
      dispatch({
        type: 'NEW_MOOD',
        payload: moodResponse
      });history.push('/review')
    }

  return (
    <div>
      <h2>a new reflection :)</h2>
      <h3>pick a mood</h3>

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="i tried my best"
          name="radio-buttons-group"
          onChange={handleMood}>
          <FormControlLabel value="yes" control={<Radio />} label="happy" />
          <FormControlLabel value="no" control={<Radio />} label="sad" />
          <FormControlLabel value="other" control={<Radio />} label="mad" />
        </RadioGroup>
      </FormControl>

      <IconButton aria-label="next">
      <NavigateNextIcon onClick={handleNext}/>
      </IconButton>
    </div>
  );
}

export default MoodComponent;