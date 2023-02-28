import { db } from './../index'

const COLLECTION_NAME = 'product'

export type Product = {
  id?: string
  code: number
  name: string
  price: number
}

export const all = async (): Promise<Array<Product>> => {
  const snapshot = await db.collection(COLLECTION_NAME).get()
  const data: Array<any> = []
  snapshot.docs.map((_data: any) => {
    data.push({
      id: _data.id,
      ..._data.data()
    })
  })
  return data as Array<Product>
}

export const create = async (product: Product): Promise<Product> => {
  const docRef = await db.collection(COLLECTION_NAME).add(product)
  return {
    id: docRef.id,
    ...product
  } as Product
}

export const update = async (
  docId: string,
  product: Product
): Promise<Product> => {
  const res = await db.collection(COLLECTION_NAME).doc(docId).update(product)

  const updatedProduct: Product = {
    code: product.code,
    name: product.name,
    price: product.price
  }

  return updatedProduct
}

export const remove = async (docId: string) => {
  await db.collection(COLLECTION_NAME).doc(docId).delete()
}
