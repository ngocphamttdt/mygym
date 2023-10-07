export interface IProductForm {
  name: string
  categoryId: string
  description: string
  price: number
  url: string
}

export interface IProduct  {
  id?: number
  name: string
  price: number
  desc?: string
  categoryId?: number
  url?: string
}
