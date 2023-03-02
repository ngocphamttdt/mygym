import { IProduct } from '../../components/models/productInterface'
import { _all, _create, _remove, _update } from './repos'

const COLLECTION_NAME = 'product'

export const all = async (): Promise<Array<IProduct>> =>
  (await _all(COLLECTION_NAME)) as Array<IProduct>

export const create = async (product: IProduct): Promise<IProduct> => {
  const docRef = await _create(COLLECTION_NAME, product)
  return {
    id: docRef.id,
    ...product
  } as IProduct
}

export const update = async (docId: string, product: IProduct) =>
  await _update(COLLECTION_NAME, docId, product)

export const remove = async (docId: string) => _remove(COLLECTION_NAME, docId)
