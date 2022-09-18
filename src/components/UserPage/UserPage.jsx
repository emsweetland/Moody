import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import GuyComponent from '../GuyComponent/GuyComponent';

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

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const reflection = useSelector((store) => store.reflection)
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_REFLECTION' });
  }, [dispatch]);

  console.log({reflection});

  return (
    <Box>
    <Stack spacing={2}>
      <Item>
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <button    onClick={() => {
            history.push('/past')}}>Past Reflections</button>
      <br />
      <GuyComponent/>
      <br />
      <button    onClick={() => {
            history.push('/new')}}>New Reflection</button>
      <p>Your ID is: {user.id}</p>
    
      </div>
    </Item>
        </Stack>
      </Box>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
