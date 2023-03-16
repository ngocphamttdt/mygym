import { Box, Button, Paper } from "@mui/material";
import { IShoppingTotal } from "components/models/shoppingCartInterface";
import React from "react";

export const ShoppingCartTotal = React.memo(({ total, numOfItem }: IShoppingTotal) => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <h3>Shopping Info</h3>
      <Box>
        <p>Number of items: {numOfItem}</p>
        <p>Total: ${total}</p>
        <Button variant="contained">Payment</Button>
      </Box>
    </Paper>
  )
})