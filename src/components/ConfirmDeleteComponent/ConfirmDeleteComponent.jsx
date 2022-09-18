import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
//MUI stuff
import { IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ConfirmDeleteComponent(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();

  const deleteDetail = (id) => {
    console.log('delete_response', id)
    dispatch({
      type: 'DELETE_RESPONSE',
      payload:
        id
    })
    history.push(`/delete`)
  }

  return (
    <div>
      <h2>an old reflection :)</h2>
      <h3>are you sure you'd like to delete this reflection?</h3>
      <IconButton aria-label="next">
        <NavigateNextIcon  onClick={(() => deleteDetail(params.id))}/>
      </IconButton>
    </div>
  );
}

export default ConfirmDeleteComponent;