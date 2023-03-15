import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system"
import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react"
import { useLocalStorage } from "hooks";
import { shortItem } from "utils/common";
import { IShoppingItem, IShoppingTotal } from "../models/shoppingCartInterface";
import { ShoppingCartDetail } from "./shoppingCartDetail";
import { ShoppingCartTotal } from "./shoppingCartTotal";
import { Widget } from "components/common";

const INCREMENTED_COUNT: string = 'INCREMENTED_COUNT'
const DECREMENTE_COUNT: string = 'DECREMENTE_COUNT'
const DELETE_ITEM: string = 'DELETE_ITEM'

interface IUpdateCount {
  type: string,
  payload: IShoppingItem
}

function reducer(state: IShoppingData, action: IUpdateCount) {
  switch (action.type) {
    case INCREMENTED_COUNT:
      return {
        ...state,
        data: shortItem([...state.data.filter(x => x.id !== action.payload.id), { ...action.payload, count: action.payload.count++ }])
      }
    case DECREMENTE_COUNT:
      return {
        ...state,
        data: shortItem([...state.data.filter(x => x.id !== action.payload.id), { ...action.payload, count: action.payload.count-- }])
      }
    case DELETE_ITEM:
      return {
        ...state,
        data: shortItem([...state.data.filter(x => x.id !== action.payload.id)])
      }
    default:
      return state
  }
}

interface IShoppingData {
  data: IShoppingItem[]
}

export const ShoppingCart = () => {
  const [storageItems, setStorageItems] = useLocalStorage<IShoppingItem[]>('shopping-cart', [])
  const [state, dispatch] = useReducer(reducer, { data: [...storageItems] } as IShoppingData);

  const [address, setAddress] = useState<string>('')

  const addressRef = useRef<HTMLInputElement>(null)

  const handleChangeCount = useCallback((increase: boolean, prodId: string) => {
    const newItem = getShoppingItemByProdId(prodId, state.data)
    increase ?
      dispatch({ type: INCREMENTED_COUNT, payload: newItem })
      : dispatch({ type: DECREMENTE_COUNT, payload: newItem })
  }, [])

  const handleDelete = useCallback((prodId: string) => {
    dispatch({ type: DELETE_ITEM, payload: getShoppingItemByProdId(prodId, state.data) })
  }, [])

  const shoppingInfoMeno: IShoppingTotal = useMemo(() => {
    const info: IShoppingTotal = state.data.reduce((accumulator: IShoppingTotal, curr: IShoppingItem) => {
      accumulator = {
        numOfItem: (accumulator.numOfItem + curr.count),
        total: (accumulator.total + curr.price * curr.count)
      } as IShoppingTotal

      return accumulator
    }, { numOfItem: 0, total: 0 } as IShoppingTotal)

    return info
  }, [state])

  const getShoppingItemByProdId = (prodId: string, shoppingItems: IShoppingItem[]): IShoppingItem =>
    shoppingItems.find(x => x.id === prodId) as IShoppingItem

  const handleUpdateAdress = () => {
    if (addressRef.current) {
      setAddress(addressRef.current.value as string)
      addressRef.current.value = ''
    }
  }

  useEffect(() => {
    setStorageItems(state.data)
  }, [state])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ maxWidth: '1536px', margin: '24px auto 0' }}>
        <Grid item xs={12}>
          <Grid container
            spacing={{ xs: 1, md: 1 }}>
            <Grid item xs={7}>
              <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth size="small" inputRef={addressRef} />
            </Grid>
            <Grid item xs={2}>
              <Button variant="outlined" size="large" onClick={handleUpdateAdress}>{address ? 'Update' : 'Add'}</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Widget title="Address:">{address}</Widget>
        </Grid>
        <Grid item xs={8}>
          <ShoppingCartDetail
            shoppingItems={state.data}
            onChangeCount={handleChangeCount}
            onDelete={handleDelete}
          />
        </Grid>
        <Grid item xs={4}>
          <ShoppingCartTotal
            numOfItem={shoppingInfoMeno.numOfItem as number}
            total={shoppingInfoMeno.total as number}
          />
        </Grid>
      </Grid>
    </Box>
  )
}