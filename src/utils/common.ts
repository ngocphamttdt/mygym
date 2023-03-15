import { IShoppingItem } from 'components/models/shoppingCartInterface'

export const shortItem = (data: IShoppingItem[]): IShoppingItem[] =>
  data.sort((a, b) => {
    if (a.productName < b.productName) return -1
    if (a.productName > b.productName) return 1
    return 0
  })
