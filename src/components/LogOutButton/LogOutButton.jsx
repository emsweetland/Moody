import React from 'react';
import { useDispatch } from 'react-redux';

import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <IconButton aria-label="logout"
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}>
      <LogoutIcon />
    </IconButton>
  );
}

export default LogOutButton;
