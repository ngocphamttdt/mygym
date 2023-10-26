
import { ShoppingCart } from 'components/cart';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Home } from 'components/home';
import Navbar from 'components/navbar/navbar';
import { ProductForm, UploadPhoto } from 'components/product';
import { PageNotFound } from 'components/common';
import { Counter } from 'components/counter';
import { DataGridDemo } from 'components/examples/examples2/Example2';
import { Photos } from 'components/ApiUT/Photos';
import { ChartContainer } from 'components/Chart';
import { APIData, Social } from 'components/ApiUT';
import { useSelector } from 'react-redux';
import { IUser } from 'components/models/userInterface';
function App() {
  const authSelector: IUser = useSelector((state: any) => state.auth.data)

  return (
    <Fragment>
      <Navbar />
      {authSelector &&
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product'>
              <Route index element={<ProductForm />} />
              <Route path=':id' element={<ProductForm />} />
              <Route path='new' element={<UploadPhoto />} />
              <Route path='shopping' element={<ShoppingCart />} />
            </Route>
            <Route path='/chart' element={<ChartContainer />} />
            <Route path='/api' element={<APIData />} />
            <Route path='/social' element={<Social />} />
            <Route path='/counter' element={<Counter defaultCount={0} description={'init'} />} />
            <Route path='/demo' element={<DataGridDemo />} />
            <Route path='/photos' element={<Photos />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </>
      }
    </Fragment>
  )
}

export default App;