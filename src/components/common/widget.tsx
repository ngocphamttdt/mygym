import { Paper, Typography } from '@mui/material'
import { IWidgetProps } from 'components/models/interfaceModels'
import React, { ReactChild } from 'react'

export const Widget = ({ title, children }: IWidgetProps) => {
  (
    <Paper sx={{ p: 2 }} variant="outlined" square >
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <div>{children}</div>
    </Paper>
  )
}