import { Paper, Typography } from '@mui/material'
import { IWidgetProps } from 'components/models/interfaceModels'

export const Widget = ({ title, children }: IWidgetProps) => {
  return (
    <Paper sx={{ p: 2 }} variant="outlined" square >
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <div>{children}</div>
    </Paper>
  )
}