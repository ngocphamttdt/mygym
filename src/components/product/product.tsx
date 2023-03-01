import React, { useEffect } from "react";
import * as repo from '../../db/repositories/product'

const ex: repo.Product = {
  code: 5,
  name: 'Hello glass',
  price: 10,
}
const upEx: repo.Product = {
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

  const createProduct = async (product: repo.Product) => {
    const res = await repo.create(product)
    console.log('res', res);

  }

  const updateProduct = (product: repo.Product) => {
    const res = repo.update(
      'zLeL85S6cGx9RlMfoQzz', product)
  }

  const removeProduct = (id: string) => {
    repo.remove(id)
  }

  return (
    <div>my product</div>
  )

}

export default Product