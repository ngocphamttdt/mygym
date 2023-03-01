import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc
} from 'firebase/firestore'
import { db } from '..'

const COLLECTION_NAME = 'product'

export type Product = {
  id?: string
  code: number
  name: string
  price: number
}

// Retrieve all documents from a collection

export const all = async (): Promise<Array<Product>> => {
  const querySnapshot = await getDocs(collection(db, COLLECTION_NAME))
  const data: Array<any> = []

  querySnapshot.forEach((doc: any) => {
    data.push({
      id: doc.id,
      ...doc.data()
    })
  })

  return data as Array<Product>
}

export const create = async (product: Product): Promise<Product> => {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), product)
  return {
    id: docRef.id,
    ...product
  } as Product
}

export const update = async (
  docId: string,
  product: Product
): Promise<Product> => {
  const docRef = doc(db, COLLECTION_NAME, docId)

  await updateDoc(docRef, product)
  const updatedProduct: Product = {
    code: product.code,
    name: product.name,
    price: product.price
  }

  return updatedProduct
}

export const remove = async (docId: string) => {
  const docRef = doc(db, COLLECTION_NAME, docId)
  await deleteDoc(docRef)
}
