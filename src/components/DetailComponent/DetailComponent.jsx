import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
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

  const dispatch = useDispatch();


  console.log('params.id', params.id);
  console.log('thisReflection', thisReflection);
  //console.log(thisReflection[0].moodname)
  // console.log(thisReflection[0].text, thisReflection[0].response);
  // console.log(thisReflection[1].text, thisReflection[1].response);
  // console.log(thisReflection[2].text, thisReflection[2].response);
  // console.log(thisReflection[3].text, thisReflection[3].response);


useEffect(() => {
  dispatch({ type: 'FETCH_THIS_REFLECTION', payload: params.id });
}, [])


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
      <ul>
        <li>mood : {thisReflection[0].moodname}</li>
        <li>q1{thisReflection[0].text} </li>
        <li>q2{thisReflection[1].text} </li>
        <li>q3{thisReflection[2].text} </li>
        <li>q4{thisReflection[3].text} </li>
      </ul>
    <IconButton aria-label="edit">
      <EditIcon />
    </IconButton>
    <IconButton aria-label="delete-forever">
      <DeleteForeverIcon />
    </IconButton>
    </div>
  );
}

export default DetailComponent;