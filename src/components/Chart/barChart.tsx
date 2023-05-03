import { IProduct } from "components/models/productInterface"
import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ProductActions } from "store/actions/productActions"
import * as repo from 'db/repositories/product'
import { Bar } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"
import { IValueMap } from "components/models/valueMapInterface"


Chart.register(...registerables);

export const BarChart = () => {
  const productSelectors: IProduct[] = useSelector((state: any) => state.products.data)
  const dispatch = useDispatch()
  const [products, setProducts] = useState<IProduct[]>()


  const chartData: any = useMemo(() => {
    if (products) {
      const data: any = products.reduce((acc: IValueMap, curr: IProduct) => {
        if (curr.price < 5)
          acc['less'] = acc['less'] ? acc['less'] + 1 : 1

        else if (curr.price >= 5 && curr.price <= 10)
          acc['middle'] = acc['middle'] ? acc['middle'] + 1 : 1

        else if (curr.price > 10)
          acc['greater'] = acc['greater'] ? acc['greater'] + 1 : 1

        return acc
      }, {} as IValueMap)
      const dataSource: any = {
        data: {
          labels: Object.keys(data),
          datasets: [{
            label: 'price',
            data: Object.values(data),
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }
      return dataSource
    }
  }, [products])

  const fetchData = () => {

    const productPromise = new Promise((resolve, reject) => {
      try {
        resolve(repo.all())
      } catch (error) {
        reject(error)
      }

    })
    return productPromise
  }

  useEffect(() => {
    if (productSelectors === undefined) {
      fetchData().then(data => {
        setProducts(data as IProduct[])
        dispatch({ type: "SET_PRODUCTS", payload: data } as ProductActions)
      }).catch(err => err)
    }
    else setProducts(productSelectors)
  }, [])

  return (
    <>
      {chartData &&
        <Bar
          options={chartData['option']}
          data={chartData['data']}

        />
      }
    </>)
}