import { Box, Button } from "@mui/material";
import { IShoppingTotal } from "components/models/shoppingCartInterface";
import React from "react";
import { Item } from "./cart.module";

export const ShoppingCartTotal = React.memo(({ total, numOfItem }: IShoppingTotal) => {
  return (
    <Item>
      <h3>Shopping Info</h3>
      <Box>
        <p>Number of items: {numOfItem}</p>
        <p>Total: ${total}</p>
        <Button variant="contained">Payment</Button>
      </Box>
    </Item>
  )
})