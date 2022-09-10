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


  console.log(store)


  return (

    <div>

      <h2>Past Reflections</h2>
      <p>date/time</p>
      <ul>
        <li>mood</li>
        <li>q1</li>
        <li>q2</li>
        <li>q3</li>
        <li>q4</li>
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