import { Routes, Route } from 'react-router'
import { HomePage } from './Pages/HomePage'
import { CheckoutPage } from './Pages/checkout/CheckoutPage'
import { OrdersPage } from './Pages/OrdersPage'
import { TrackingPage } from './Pages/TrackingPage'
import { NotFoundPage } from './Pages/NotFoundPage'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(()=> {
    axios.get('api/cart-items?expand=product')
      .then((res) => setCart(res.data));
  },[]);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />}/>
      <Route path="tracking" element={<TrackingPage cart={cart} />}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
  )
}

export default App
