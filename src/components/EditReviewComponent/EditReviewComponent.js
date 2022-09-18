import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
//MUI stuff
import { IconButton } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import axios from 'axios';
import { useParams } from 'react-router-dom'

// TODO sql query sending responses along with mood



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
      <h2>New Reflection</h2>
      <h3>review your mood:</h3>
      {responseToSend.mood === 1 && <li>tired</li>}
      {responseToSend.mood === 2 && <li>epic</li>}
      {responseToSend.mood === 3 && <li>grumpy</li>}
      {responseToSend.mood === 4 && <li>devastated</li>}
      <IconButton aria-label="publish">
        <PublishIcon onClick={handleClick}/>
      </IconButton>
    </div>
  );
  
}

export default EditReviewComponent;