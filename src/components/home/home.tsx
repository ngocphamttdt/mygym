import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ICategory } from 'components/models/categoryInterface'
import { IObject } from 'components/models/interfaceModels'
import { IProduct } from "components/models/productInterface";

import { SET_CATEGORY_ID } from "store/constants/categoryConstants";
import { DELETE_PRODUCT, SET_PRODUCTS } from 'store/constants/productConstants'
import { Box } from "@mui/system";
import { SearchingBox } from "./searchBox";
import { ProductCard } from "../product";
import { Loading } from "components/common";
import { get, remove } from "api/apiHelper";
import { IUser } from "components/models/userInterface";


export const Home = () => {
  const dispath = useDispatch()
  const [products, setProducts] = useState<Array<IProduct>>([])
  const [categoryOptions, setCategoryOptions] = useState<IObject[]>([])
  const [isFilter, setIsFilter] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)


  const categorySelector: IObject[] = useSelector((state: any) => state.category.data)
  const productSelector: IProduct[] = useSelector((state: any) => state.products.data)
  const authenSelector: IUser = useSelector((state: any) => state.auth.data)

  useEffect(() => {
    fetchProducts()
    fetchCategory()
  }, [])

  useEffect(() => {
    if (categoryOptions?.length && !categorySelector) {
      dispath({ type: SET_CATEGORY_ID, payload: categoryOptions })
    }
  }, [categoryOptions])

  useEffect(() => {
    if (products.length && !productSelector) {
      dispath({ type: SET_PRODUCTS, payload: products })
    }
  }, [products])

  const fetchCategory = async () => {
    const data = await get('https://localhost:7137/api/category', authenSelector.token)
    setCategoryOptions(data.map((item: ICategory) => ({ value: item.id, label: item.name } as IObject)))
  }

  const fetchProducts = async () => {
    setProducts([])
    const data = await get('https://localhost:7137/api/product', authenSelector.token)
    setProducts(data as IProduct[])
    setIsLoading(false)
  }

  const handleSearchProduct = (searchData: IProduct) => {
    let productFiltered: IProduct[] = [...productSelector]

    if (searchData.name) {
      productFiltered = productFiltered.filter(x => x.name.toLowerCase().includes(searchData.name.toLowerCase()))
    }
    else if (searchData.categoryId) {
      productFiltered = productFiltered.filter(x => x.categoryId === searchData.categoryId)
    }
    else if (searchData.price && searchData.price !== 0) {
      productFiltered = productFiltered.filter(x => x.price <= searchData.price)
    }
    setProducts(productFiltered)
    setIsFilter(true)
  }
  const handleReset = () => {
    setProducts(productSelector)
    setIsFilter(false)
  }

  const handleDelete = async (prodId: number) => {
    await remove(`https://localhost:7137/api/product/${prodId}`)
    fetchProducts()
    dispath({ type: DELETE_PRODUCT, payload: prodId })
  }

  return (
    <>
      {isLoading ? <Loading /> :
        <>
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ maxWidth: '1536px', margin: '10px auto 0' }}
          >
            <Grid item xs={3}>
              <Box display="flex" justifyContent="flex-start" gap={2}>
                <SearchingBox onSearchProduct={handleSearchProduct} />
                {isFilter && <Button variant="outlined" onClick={handleReset}>Reset</Button>}
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={2}
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ maxWidth: '1536px', margin: '10px auto 0' }}
          >
            {
              products && products.map(({ id, name, price }) => (
                <Grid item xs={3} key={id}>
                  <ProductCard
                    id={id}
                    name={name}
                    price={price}
                    onDelete={handleDelete}

                  />
                </Grid>
              ))
            }
          </Grid>
        </>
      }
    </>
  )
}