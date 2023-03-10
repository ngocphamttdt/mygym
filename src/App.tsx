
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import PageNotFound from './components/common/notFound';
import Navbar from './components/navbar/navbar';
import ProductForm from './components/product/productForm';
import UploadPhoto from './components/product/uploadPhoto';

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
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Fragment>
  )
}

export default App;

