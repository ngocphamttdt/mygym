import { CircularProgress, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Loading: React.FC = () => {

  return (
    <>
      <Grid
        container
      >
        <Grid item xs={12}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}>
            <CircularProgress />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
