
import { Fragment } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Product from './components/product/product';
import * as repo from './db/repositories/product';

function App() {

  // const [products, setProducts] = useState<Array<repo.Product>>([])

  // useEffect(() => {
  //   fetchProducts()
  // }, [])

  // const fetchProducts = async () => {
  //   setProducts([])
  //   const _products = await repo.all()
  //   setProducts(_products)
  //   console.log('products', _products);

  // }

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </Fragment>
  )
}

export default App;

 // <div className="App">
    //   <ul>
    //     {products && products.map((item, key) => (<li key={key}>{item.code}- {item.name}</li>))}
    //   </ul>
    // </div>
