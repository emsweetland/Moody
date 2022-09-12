import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
//MUI stuff
import { IconButton } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ReviewComponent(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const history = useHistory();
  const dispatch = useDispatch();
  const response = useSelector((store) => store.responseReducer)
  
  const responseToSend = {
    sleep : response.sleepResponse,
    food :  response.foodResponse,
    water : response.waterResponse,
    friend : response.friendResponse,
    mood : response.moodResponse
  }

  const handleClick = () => {
    console.log(responseToSend)

  }

  return (
    <div onClick={handleClick}>
      <h2>a new reflection :)</h2>
      <h3>review your answers:</h3>
      <li>get enough sleep? {response.sleepResponse}</li>
      <li>get enough to eat? {response.foodResponse}</li>
      <li>drink enough water? {response.waterResponse}</li>
      <li>did you talk to a friend? {response.friendResponse}</li>
      <li>what's your mood today? {response.moodResponse}</li>
      <IconButton aria-label="next">
        <PublishIcon  onClick={() => {
            history.push('/submit')}}/>
      </IconButton>
    </div>
  );
}

export default ReviewComponent;