
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import ProductForm from './components/product/productForm';

function App() {



  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<ProductForm />} />
        <Route path="/product/:id" element={<ProductForm />} />
      </Routes>
    </Fragment>
  )
}

export default App;

