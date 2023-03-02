import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import React, { useEffect } from "react";
import * as repo from '../../db/repositories/product'
import { IProduct } from "../models/productInterface";

const ex: IProduct = {
  code: 5,
  name: 'Hello glass',
  price: 10,
}
const upEx: IProduct = {
  code: 1,
  name: 'skirt num1',
  price: 20,
}
const Product: React.FC = () => {

  useEffect(() => {
    //  createProduct(ex)
    //  updateProduct(upEx)
    // removeProduct('zLeL85S6cGx9RlMfoQzz')
  }, [])

  const createProduct = async (product: IProduct) => {
    const res = await repo.create(product)
    console.log('res', res);

  }

  const updateProduct = (product: IProduct) => {
    const res = repo.update(
      'zLeL85S6cGx9RlMfoQzz', product)
  }

  const removeProduct = (id: string) => {
    repo.remove(id)
  }

  return (
    <>

      <div>my product</div>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
    </>

  )

}

export default Product