import { ICategory } from '../../components/models/categoryInterface'
import { _all } from './repos'

const COLLECTION_NAME = 'category'

export const all = async (): Promise<Array<ICategory>> =>
  (await _all(COLLECTION_NAME)) as Array<ICategory>
