import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
//MUI things
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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




function DetailComponent() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const thisReflection = useSelector((store) => store.thisReflectionReducer);
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  console.log('params.id', params.id);
  console.log('thisReflection', thisReflection);

  useEffect(() => {
    dispatch({ type: 'FETCH_THIS_REFLECTION', payload: params.id });
  }, [])

  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric", hour: 'numeric', hour12: true }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const editDetail = (id) => {
    console.log('im editing:', id)
    history.push(`/edit/${id}`)
  }


  //toggle click listener with popup







  //dispatch when u click ok on the popup
  // const deleteDetail = (id) => {
  //   console.log('delete_response', id)
  //   dispatch({
  //     type: 'DELETE_RESPONSE',
  //     payload:
  //       id
  //   })
  //   history.push('/past')
  // }

const deleteDetail = (id) => {
  console.log(id);
  history.push(`/confirmDelete/${id}`)
}





  return (
    
    <Box>
    <Stack spacing={2}>
      <Item>
    <div>

      <h2>Past Reflections</h2>
      
      {thisReflection[0] && (
        <div>
        <p>{formatDate(thisReflection[0].when)}</p>
        <ul>
          <li>Mood: {thisReflection[0].moodname}</li>
          {thisReflection[0].response === null && <li>{thisReflection[0].text}: Tried my best!</li>}
          {thisReflection[0].response === true && <li>{thisReflection[0].text}: Yep!</li>}
          {thisReflection[0].response === false && <li>{thisReflection[0].text}: Nope.</li>}
          {thisReflection[1].response === null && <li>{thisReflection[1].text}: Tried my best!</li>}
          {thisReflection[1].response === true && <li>{thisReflection[1].text}: Yep</li>}
          {thisReflection[1].response === false && <li>{thisReflection[1].text}: Nope</li>}
          {thisReflection[2].response === null && <li>{thisReflection[2].text}: Tried my best!</li>}
          {thisReflection[2].response === true && <li>{thisReflection[2].text}: Yep</li>}
          {thisReflection[2].response === false && <li>{thisReflection[2].text}: Nope</li>}
          {thisReflection[3].response === null && <li>{thisReflection[2].text}: Tried my best!</li>}
          {thisReflection[3].response === true && <li>{thisReflection[2].text}: Yep</li>}
          {thisReflection[3].response === false && <li>{thisReflection[2].text}: Nope</li>}
        </ul>
        </div>
      )
      }
      <IconButton aria-label="edit">
        <EditIcon onClick={(() => editDetail(params.id))} />
      </IconButton>
      <IconButton aria-label="delete-forever">
        <DeleteForeverIcon onClick={(() => deleteDetail(params.id))} />
      </IconButton>
    </div>
    </Item>
        </Stack>
      </Box>
    
  );
}

export default DetailComponent;