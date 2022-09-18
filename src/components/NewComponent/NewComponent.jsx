import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
//MUI stuff
import { IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
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

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function NewComponent(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');
  const history = useHistory();

  
  return (
        
    <Box>
    <Stack spacing={2}>
      <Item>
    <div>
      <h2>a new reflection :)</h2>
      <p>You will be asked four questions that will each have a multiple choice response. Answer honestly, but don't overthink it! This is only meant to take a minute or two. :)</p>

      <IconButton aria-label="next">
        
        <NavigateNextIcon onClick={() => {
            history.push('/sleep')}}/>
      </IconButton>
      </div>
    </Item>
        </Stack>
      </Box>
  );
}

export default NewComponent;