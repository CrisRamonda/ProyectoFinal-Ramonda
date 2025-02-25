import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer'
import CheckOut from './components/CheckOut'
import Order from './components/Order'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/products/:id' element={<ItemDetailContainer />} />
          <Route path='/cart/' element={<CartContainer />} />
          <Route path='/checkout/' element={<CheckOut />} />
          <Route path='/order/:orderId' element={<Order />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
