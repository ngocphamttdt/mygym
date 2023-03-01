import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as repo from '../../db/repositories/product'
import ProductCard from "../product/productCard";


const Home: React.FC = () => {
  const [products, setProducts] = useState<Array<repo.Product>>([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    setProducts([])
    const _products = await repo.all()
    setProducts(_products)

  }
  return (
    <>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ maxWidth: '1536px', margin: '10px auto 0' }}
      >
        {
          products && products.map(({ id, code, name, price }, idx) => (
            <Grid item xs={3} key={id}>
              <ProductCard id={id} code={code} name={name} price={price} />
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

export default Home