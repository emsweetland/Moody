import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
//MUI things
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



function DetailComponent(id) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const thisReflection = useSelector ((store) => store.thisReflectionReducer);
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();


  console.log('params.id', params.id);
  console.log('thisReflection', thisReflection);



useEffect(() => {
  dispatch({ type: 'FETCH_THIS_REFLECTION', payload: params.id });
}, [])


const editDetail = (id) => {
  console.log('im editing:', id)
  history.push(`/edit/${id}`)
}

const deleteDetail = (id) => {
  console.log('delete_response', id)
  dispatch({
    type : 'DELETE_RESPONSE',
    payload: 
        id
  })
}



//write a function that checks to see if the result is true, null, or false
//let selection = northing
//if true  selection = yes i did that
//else if null selection = i tried my best
//else false selection = i didn't do that
//return selection!!



  return (

    <div>

      <h2>Past Reflections</h2>
      <p>date/time</p>
      { thisReflection[0] && (
      <ul>
        <li>mood : {thisReflection[0].moodname}</li>
        <li>{thisReflection[0].text} </li>
        <li>{thisReflection[1].text} </li>
        <li>{thisReflection[2].text} </li>
        <li>{thisReflection[3].text} </li>
      </ul>
      )
    }
    <IconButton aria-label="edit">
      <EditIcon onClick={(() => editDetail(params.id))}/>
    </IconButton>
    <IconButton aria-label="delete-forever">
      <DeleteForeverIcon onClick={(() => deleteDetail(params.id))}/>
    </IconButton>
    </div>
  );
}

export default DetailComponent;