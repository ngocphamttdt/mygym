export interface IShoppingItem {
  id: string
  productName: string
  price: number
  count: number
}

export interface IShoppingDetailProps {
  shoppingItems: IShoppingItem[]
  onChangeCount: (increase: boolean, itemId: string) => void
  onDelete: (itemId: string) => void
}

export interface IShoppingTotal {
  numOfItem: number
  total: number
}
