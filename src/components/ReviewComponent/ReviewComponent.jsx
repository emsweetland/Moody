import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
//MUI stuff
import { IconButton } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import axios from 'axios';

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

  console.log(responseToSend)

  const handleClick = () => {
    console.log(responseToSend);
    dispatch({
      type : 'POST_RESPONSE',
      payload: {
        responseToSend
      }
    })
    history.push(`/submit`)
  }

  return (
    <div >
      <h2>a new reflection :)</h2>
      <h3>review your answers:</h3>
      <li>get enough sleep? {response.sleepResponse}</li>
      <li>get enough to eat? {response.foodResponse}</li>
      <li>drink enough water? {response.waterResponse}</li>
      <li>did you talk to a friend? {response.friendResponse}</li>
      {response.moodResponse === 1 && <li>what's your mood today? tired</li>}
      {response.moodResponse === 2 && <li>what's your mood today? epic</li>}
      {response.moodResponse === 3 && <li>what's your mood today? grumpy</li>}
      {response.moodResponse === 4 && <li>what's your mood today? devastated</li>}
      <IconButton aria-label="publish">
        <PublishIcon onClick={handleClick}/>
      </IconButton>
    </div>
  );
}

export default ReviewComponent;