import { IProduct } from './productInterface'
export interface FormValues {
  name: string
  country: string
}

export interface IObject {
  label: string
  value: string
}

export interface IFieldProps {
  name: string
  label: string
}

export interface ISelectionFieldProps {
  name: string
  label: string
  options: IObject[]
}

export interface ISearchingParams {
  onSearchProduct: (parms: IProduct) => void
}
