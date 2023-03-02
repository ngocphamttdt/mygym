export interface IProductForm {
  name: string
  categoryId: string
  description: string
  price: number
  url: string
}

export type IProduct = {
  id?: string
  code: number
  name: string
  price: number
  desc?: string
  categoryId?: string
  url?: string
}
