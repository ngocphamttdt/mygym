
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import ProductForm from './components/product/productForm';

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
        <Route path='/product' element={<ProductForm />} />
      </Routes>
    </Fragment>
  )
}

export default App;

