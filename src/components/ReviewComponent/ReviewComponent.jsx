import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
//MUI stuff
import { IconButton } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import axios from 'axios';
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
    <Box>
    <Stack spacing={2}>
      <Item>
    <div >
      <h2>a new reflection :)</h2>
      <h3>review your answers:</h3>
      {response.sleepResponse === "null" && <li>get enough sleep? : Tried my best!</li>}
      {response.sleepResponse === "true" && <li>get enough sleep? : yep!</li>}
      {response.sleepResponse === "false" && <li>get enough sleep?  nope!</li>}
      {response.foodResponse === "null" && <li>get enough sleep?  Tried my best!</li>}
      {response.foodResponse === "true" && <li>get enough sleep?  yep!</li>}
      {response.foodResponse === "false" && <li>get enough sleep?  nope!</li>}
      {response.waterResponse === "null" && <li>get enough sleep?  Tried my best!</li>}
      {response.waterResponse === "true" && <li>get enough sleep?  yep!</li>}
      {response.waterResponse === "false" && <li>get enough sleep?  nope!</li>}
      {response.friendResponse === "null" && <li>get enough sleep?  Tried my best!</li>}
      {response.friendResponse === "true" && <li>get enough sleep?  yep!</li>}
      {response.friendResponse === "false" && <li>get enough sleep?  nope!</li>}
      {response.moodResponse === 1 && <li>what's your mood today? tired</li>}
      {response.moodResponse === 2 && <li>what's your mood today? epic</li>}
      {response.moodResponse === 3 && <li>what's your mood today? grumpy</li>}
      {response.moodResponse === 4 && <li>what's your mood today? devastated</li>}
      <IconButton aria-label="publish">
        <PublishIcon onClick={handleClick}/>
      </IconButton>
    </div>
    </Item>
        </Stack>
      </Box>
  );
}

export default ReviewComponent;