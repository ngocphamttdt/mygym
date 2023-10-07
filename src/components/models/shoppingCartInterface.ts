export interface IShoppingItem {
  id: number
  productName: string
  price: number
  count: number
}

export interface IShoppingDetailProps {
  shoppingItems: IShoppingItem[]
  onChangeCount: (increase: boolean, itemId: number) => void
  onDelete: (itemId: number) => void
}

export interface IShoppingTotal {
  numOfItem: number
  total: number
}
