import React from 'react';
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


function AboutPage() {
  return (
    <Box>
    <Stack spacing={2}>
      <Item>
    <div>

       
        <p>Tech Used <br></br>HTML, CSS, Material UI, JavaScript, React, Redux, Sagas, Node, PostgresSQL, VS Code, Figma, DB Designer, Procreate</p>

        <p>Next Steps<br></br>User Customization for Character, Prompts, Cheevos</p>

        <p>Thank you,<br></br> My family, JFCS, PrimeAcademy <br></br> my cats, friends and fellow Mitches who helped to pick me up while I was down.</p>
        <p>Connect with me! <br></br>
        https://github.com/emsweetland
       https://www.linkedin.com/in/em-sweetland/</p>

      </div>
    </Item>
        </Stack>
      </Box>
  );
}

export default AboutPage;
