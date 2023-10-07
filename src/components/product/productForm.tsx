import { Button, Grid, } from '@mui/material';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import SelectWrapper from 'components/customControl/select'
import TextfieldWrapper from 'components/customControl/textField';
import { IObject } from '../models/interfaceModels';
import { IProduct } from '../models/productInterface';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ADD_PRODUCT, UPDATE_PRODUCT } from 'store/constants/productConstants';
import { get, post, put } from 'api/apiHelper';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  categoryId: Yup.string().required('Category is required'),
  price: Yup.number().required('Price is required')

});
const initValues: IProduct = {
  name: '',
  categoryId: 0,
  desc: '',
  price: 0,
  url: ''
};

export const ProductForm = () => {
  const params: any = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [categoryOptions, setCategoryOptions] = useState<IObject[]>()
  const categorySelector: IObject[] = useSelector((state: any) => state.category.data)
  const productSelector: IProduct[] = useSelector((state: any) => state.products.data)

  const [initProduct, setInitProduct] = useState<IProduct>(initValues)

  const handleSubmit = async (values: IProduct) => {
    const newProduct: IProduct = {
      name: values.name,
      price: +values.price,
      categoryId: values.categoryId
    }

    if (Object.keys(params).length) {
      const updatedProduct = {
        ...newProduct,
        id: +params.id
      } as IProduct

      await put('https://localhost:7137/api/product', updatedProduct)

      dispatch({ type: UPDATE_PRODUCT, payload: updatedProduct })
    }
    else {
      await post('https://localhost:7137/api/product', newProduct)
      dispatch({ type: ADD_PRODUCT, payload: newProduct })
    }
    navigate('/')
  }

  const fetchCategory = async () => {
    const data = await get('https://localhost:7137/api/category')
    const newCategoryOptions: IObject[] = data.map((item: any) => ({ value: item.id, label: item.name }))
    setCategoryOptions(newCategoryOptions)
  }

  useEffect(() => {
    if (!categorySelector)
      fetchCategory()
    else {
      setCategoryOptions(categorySelector)
    }

    if (Object.keys(params).length && productSelector) {
      const selectedProduct = productSelector.find(x => x.id === +params.id) as IProduct
      setInitProduct(selectedProduct)
    }
  }, [])

  return (
    <>{
      categoryOptions?.length &&
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ md: 12 }}
        style={{ maxWidth: '1536px', margin: '10px auto 0' }}
      >
        <Formik
          initialValues={initProduct}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextfieldWrapper
                    name="name"
                    label="Product name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <SelectWrapper
                    name='categoryId'
                    label='Category name'
                    options={categoryOptions}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextfieldWrapper
                    name="desc"
                    label="Desciption"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextfieldWrapper
                    name="price"
                    label="Price"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    }
    </>
  )
}