import { Button, Grid, } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import SelectWrapper from '../customControl/select';
import TextfieldWrapper from '../customControl/textField';
import { IObject } from '../models/interfaceModels';
import * as repo from '../../db/repositories/product'
import * as categoryRepo from '../../db/repositories/category'
import { IProduct } from '../models/productInterface';
import { ICategory } from '../models/categoryInterface';


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required')

});

const ProductForm: React.FC = () => {
  const [categoryOptions, setCategoryOptions] = useState<IObject[]>()
  const handleSubmit = async (values: IProduct) => {
    await repo.create(values)
  }

  const initValues: IProduct = {
    name: '',
    code: 100,
    categoryId: '',
    desc: '',
    price: 0,
    url: ''
  };

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
    fetchCategory()
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
          initialValues={initValues}
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