import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import GuyComponent from '../GuyComponent/GuyComponent';

//MUI stuff
import { IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eef0ae',
  ...theme.typography.h6,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function FoodComponent() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const history = useHistory();
  const dispatch = useDispatch();

  const [foodResponse, setFoodResponse] = useState(false)

  const handleFood = (event) => {
    console.log(event.target.value);
    setFoodResponse(event.target.value);
  };

    const handleNext = (event) => {
      event.preventDefault();
      dispatch({
        type: 'NEW_FOOD',
        payload: foodResponse,
      });history.push('/water')
    }
  
  return (
    <Box>
    <Stack spacing={2}>
      <Item>
    <div>
      <h2>a new reflection :)</h2>
      <GuyComponent/>
      <h3>did you get enough to eat?</h3>

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="i tried my best"
          name="radio-buttons-group"
          onChange={handleFood}>
          <FormControlLabel value='true' control={<Radio />} label="yes" />
          <FormControlLabel value='false' control={<Radio />} label="no" />
          <FormControlLabel value='null' control={<Radio />} label="tried my best" />
        </RadioGroup>
      </FormControl>

      <IconButton aria-label="next">
      <NavigateNextIcon onClick={handleNext}/>
      </IconButton>
   
      </div>
    </Item>
        </Stack>
      </Box>
  );
}

export default FoodComponent;