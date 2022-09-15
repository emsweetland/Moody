import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
//MUI stuff
import { IconButton } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import axios from 'axios';
import { useParams } from 'react-router-dom'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function EditReviewComponent() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const history = useHistory();
  const dispatch = useDispatch();
  const response = useSelector((store) => store.editResponseReducer)
  let reviewid = useParams();
  console.log('reviewID IN EdiT REVIEW COMPONENT:',reviewid)
  console.log('DRILLNG IN:', reviewid.id )

  
  const responseToSend = {
    sleep : response.sleepResponse,
    food :  response.foodResponse,
    water : response.waterResponse,
    friend : response.friendResponse,
    mood : response.moodResponse,
    payload: reviewid.id
  }

  const handleClick = () => {
    console.log(responseToSend);
    dispatch({
      type : 'EDIT_RESPONSE',
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
      <li>get enough sleep? </li>
      <li>get enough to eat? </li>
      <li>drink enough water?</li>
      <li>did you talk to a friend? </li>
      <li>what's your mood today? </li>
      <IconButton aria-label="publish">
        <PublishIcon onClick={handleClick}/>
      </IconButton>
    </div>
  );
  
}

export default EditReviewComponent;