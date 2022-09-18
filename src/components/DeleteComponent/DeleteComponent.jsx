import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
//MUI stuff
import { IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function DeleteComponent(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const history = useHistory();

  return (
    <div>
      <h2>a deleted reflection :)</h2>
      <h3>your reflection has been deleted!</h3>
      <IconButton aria-label="next">
        <NavigateNextIcon  onClick={() => {
            history.push('/past')}}/>
      </IconButton>
    </div>
  );
}

export default DeleteComponent;