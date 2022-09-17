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


function DetailComponent(id) {
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
  const deleteDetail = (id) => {
    console.log('delete_response', id)
    dispatch({
      type: 'DELETE_RESPONSE',
      payload:
        id
    })
  }







  return (

    <div>

      <h2>Past Reflections</h2>
      <p>{formatDate(thisReflection[0].when)}</p>
      {thisReflection[0] && (
        <ul>
          <li>mood : {thisReflection[0].moodname}</li>
          <li>{thisReflection[0].text} {thisReflection[0].response.toString()}</li>
          <li>{thisReflection[1].text} {thisReflection[1].response.toString()}</li>
          <li>{thisReflection[2].text} {thisReflection[2].response.toString()}</li>
          <li>{thisReflection[3].text} {thisReflection[3].response.toString()}</li>
        </ul>
      )
      }
      <IconButton aria-label="edit">
        <EditIcon onClick={(() => editDetail(params.id))} />
      </IconButton>
      <IconButton aria-label="delete-forever">
        <DeleteForeverIcon onClick={(() => deleteDetail(params.id))} />
      </IconButton>
    </div>
  );
}

export default DetailComponent;