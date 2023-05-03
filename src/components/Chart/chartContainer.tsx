import { Grid } from "@mui/material"
import { BoxItem } from "./boxItem"
import { BarChart } from "./barChart";
import { PieChart } from "./pieChart";

export const ChartContainer = () => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ maxWidth: '1536px', margin: '10px auto 0' }}
      >
        <Grid item xs={6}>
          <BoxItem title="Bar chart">
            <BarChart />
          </BoxItem>
        </Grid>
        <Grid item xs={6}>
          <BoxItem title="Pie chart">
            <PieChart />
          </BoxItem>
        </Grid>
      </Grid>
    </>
  )
}