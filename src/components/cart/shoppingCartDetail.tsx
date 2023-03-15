
import React from "react";
import { Button, ButtonGroup, Grid, IconButton } from "@mui/material"
import { IShoppingDetailProps } from "components/models/shoppingCartInterface"
import { BodyCart, HeadingCart, Item } from "./cart.module"
import DeleteIcon from '@mui/icons-material/Delete';

export const ShoppingCartDetail = React.memo(({ shoppingItems, onChangeCount, onDelete }: IShoppingDetailProps) => {
  const handleChangeCount = (increase: boolean, id: string) => onChangeCount(increase, id)
  const handleDelete = (id: string) => onDelete(id)
  console.log('render ShoppingCartDetail');

  return (
    <Item>
      <h3>Product item(s)</h3>
      <HeadingCart>
        <Grid container>
          <Grid item xs={1}>
            No
          </Grid>
          <Grid item xs={3}>
            Name
          </Grid>
          <Grid item xs={2}>
            Price
          </Grid>
          <Grid item xs={3}>
            Count
          </Grid>
          <Grid item xs={2}>
            Total
          </Grid>
          <Grid item xs={1}>
            Remove
          </Grid>
        </Grid>
      </HeadingCart>
      <BodyCart>
        <Grid container rowSpacing={2}>
          {shoppingItems && shoppingItems.map(({ id, productName, price, count }, indx) => (
            <>
              <Grid item xs={1} key={id}>
                {indx + 1}
              </Grid>
              <Grid item xs={3}>
                {productName}
              </Grid>
              <Grid item xs={2}>
                {price}
              </Grid>
              <Grid item xs={3}>
                <ButtonGroup variant="outlined" aria-label="outlined button group" size="small">
                  <Button onClick={() => handleChangeCount(false, id)}>-</Button>
                  <Button>{count}</Button>
                  <Button onClick={() => handleChangeCount(true, id)}>+</Button>
                </ButtonGroup>
              </Grid>

              <Grid item xs={2}>
                {price * count}
              </Grid>
              <Grid item xs={1}>
                <IconButton onClick={() => handleDelete(id)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </>
          )
          )}
        </Grid>
      </BodyCart>
    </Item>
  )
})