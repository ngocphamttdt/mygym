import { Button, Grid, } from '@mui/material';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import SelectWrapper from '../customControl/select';
import TextfieldWrapper from '../customControl/textField';
import { IObject } from '../models/interfaceModels';
import * as repo from '../../db/repositories/product'
import * as categoryRepo from '../../db/repositories/category'
import { IProduct } from '../models/productInterface';
import { ICategory } from '../models/categoryInterface';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ADD_PRODUCT, UPDATE_PRODUCT } from '../../store/constants/productConstants';


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  categoryId: Yup.string().required('Category is required'),
  price: Yup.number().required('Price is required')

});
const initValues: IProduct = {
  name: '',
  code: 100,
  categoryId: '',
  desc: '',
  price: 0,
  url: ''
};

const ProductForm = () => {
  const params: any = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [categoryOptions, setCategoryOptions] = useState<IObject[]>()
  const categorySelector: IObject[] = useSelector((state: any) => state.category.data)
  const productSelector: IProduct[] = useSelector((state: any) => state.products.data)

  const [initProduct, setInitProduct] = useState<IProduct>(initValues)

  const handleSubmit = async (values: IProduct) => {
    if (Object.keys(params).length) {
      await repo.update(params.id, values)
      dispatch({ type: UPDATE_PRODUCT, payload: { ...values, id: params.id } as IProduct })

    }
    else {
      const newProduct: IProduct = await repo.create(values)
      dispatch({ type: ADD_PRODUCT, payload: newProduct })
    }
    navigate('/')
  }

  const fetchCategory = async () => {
    const _categories: ICategory[] = await categoryRepo.all()

    const newCategoryOptions: IObject[] = _categories.map((item) => {
      return {
        value: `category/${item.id}`,
        label: item.name
      } as IObject
    })

    setCategoryOptions(newCategoryOptions)
  }

  useEffect(() => {
    if (!categorySelector)
      fetchCategory()
    else setCategoryOptions(categorySelector)

    if (Object.keys(params).length && productSelector) {
      const selectedProduct = productSelector.find(x => x.id === params.id) as IProduct
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

export default ProductForm