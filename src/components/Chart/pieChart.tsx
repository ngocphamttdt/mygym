import { Chart, registerables } from "chart.js";
import { IProduct } from "components/models/productInterface";
import { IValueMap } from "components/models/valueMapInterface";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import * as repo from 'db/repositories/product'
import { ProductActions } from "store/actions/productActions";
import { Pie } from "react-chartjs-2";
import { EFields } from "components/models/fieldsEnum";

Chart.register(...registerables);

export const PieChart = () => {
  const productSelectors: IProduct[] = useSelector((state: any) => state.products.data)
  const dispatch = useDispatch()
  const [products, setProducts] = useState<IProduct[]>()


  const chartData: any = useMemo(() => {
    if (products) {
      const data: any = products.reduce((acc: IValueMap, curr: IProduct) => {
        if (curr.price < 5)
          acc[EFields.LESS] = acc[EFields.LESS] ? acc[EFields.LESS] + 1 : 1

        else if (curr.price >= 5 && curr.price <= 10)
          acc[EFields.MIDDLE] = acc[EFields.MIDDLE] ? acc[EFields.MIDDLE] + 1 : 1

        else if (curr.price > 10)
          acc[EFields.GREATER] = acc[EFields.GREATER] ? acc[EFields.GREATER] + 1 : 1

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
            // y: {
            //   beginAtZero: true
            // }
          }
        }
      }
      return dataSource
    }
  }, [products])

  const fetchData = async () => {
    try {
      const products = await repo.all()
      setProducts(products)
      dispatch({ type: "SET_PRODUCTS", payload: products } as ProductActions)
    } catch (error: any) {
      console.error(error.message as string)
    }
  }

  useEffect(() => {
    if (productSelectors === undefined) {
      fetchData()
    }
    else setProducts(productSelectors)
  }, [])

  return (
    <div>
      {chartData &&
        <Pie
          options={chartData['option']}
          data={chartData['data']}
        />
      }
    </div>)
}