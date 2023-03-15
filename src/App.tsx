
import { ShoppingCart } from 'components/cart';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Home } from 'components/home';
import Navbar from 'components/navbar/navbar';
import { ProductForm, UploadPhoto } from 'components/product';
import { PageNotFound } from 'components/common';
function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product'>
          <Route index element={<ProductForm />} />
          <Route path=':id' element={<ProductForm />} />
          <Route path='new' element={<UploadPhoto />} />
          <Route path='shopping' element={<ShoppingCart />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Fragment>
  )
}

export default App;

