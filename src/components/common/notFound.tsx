import { Button, Typography } from '@mui/material';
import { blue, purple } from '@mui/material/colors';
import { Box, Container } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const PageNotFound: React.FC = () => {
  const color = blue[300];
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        maxHeight: '200vh',
        backgroundColor: color,

      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" onClick={() => { navigate('/') }}>Back Home</Button>
    </Box>
  );
}

export default PageNotFound