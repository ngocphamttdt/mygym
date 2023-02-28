import React, { useEffect } from "react";
import * as repo from '../../db/repositories/product'

const ex: repo.Product = {
  code: 4,
  name: 'remote2',
  price: 10,
}
const upEx: repo.Product = {
  code: 1,
  name: 'skirt',
  price: 20,
}
const Product: React.FC = () => {

  useEffect(() => {
    // createProduct(ex)
    // updateProduct(upEx)
    removeProduct('y4AqY8wNSDwDuWUjbLd8')
  }, [])

  const createProduct = (product: repo.Product) => {
    const res = repo.create(product)
    console.log('res', res);

  }

  const updateProduct = (product: repo.Product) => {
    const res = repo.update(
      'JS4n3syNwAAvkzyvvtfN', product)
  }
  //y4AqY8wNSDwDuWUjbLd8

  const removeProduct = (id: string) => {
    repo.remove(id)
  }


  return (
    <div>my product</div>
  )

}

export default Product