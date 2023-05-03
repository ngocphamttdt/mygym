import { Box, Divider, Grid, Paper, Typography } from "@mui/material"
import { ReactChild } from "react"

interface IBoxItem {
  children: ReactChild
  title: string

}
export const BoxItem = ({ title, children }: IBoxItem) => {
  return (
    <Paper elevation={3} style={{ padding: '10px' }}>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                {title}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ my: 3, mx: 2 }}>
          {children}
        </Box>
      </Box>
    </Paper>
  )
}