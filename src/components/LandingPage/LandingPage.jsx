import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
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

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <Box>
    <Stack spacing={2}>
      <Item>

      <h2>Moody</h2>

      <div className="grid">
     
          <p>Moody is a daily reflection app. 
        There are no quantities, each user reflects on their choices such as if they got enough
        sleep, or ate enough that day. 
        This is something that shouldn’t take
        more than a minute each day, even on your hardest days.  My app is designed to make the
        reflection process simple and easy, allowing you to keep logs that you can look back on days or weeks later.
        </p>


      
          {/* <RegisterForm /> */}


   
      </div>
    
    </Item>
        </Stack>
      </Box>
  );
}

export default LandingPage;
