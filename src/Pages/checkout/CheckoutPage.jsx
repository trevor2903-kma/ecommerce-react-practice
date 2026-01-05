import axios from 'axios';
import { CheckoutHeader } from './CheckoutHeader';
import './CheckoutPage.css'
import { useEffect, useState } from 'react';
import { OrderSummary } from './OrderSummary.jsx';
import { PaymentSummary } from './PaymentSummary.jsx';

export function CheckoutPage({cart}) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  
  useEffect(() => {
    axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
    .then((res) => {
      setDeliveryOptions(res.data);
      })

    axios.get('/api/payment-summary')
      .then((res) => {
        setPaymentSummary(res.data);
      })
  },[]);

  return (
    <div>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
      <title>Checkout</title>

      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart}/>

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </div>
  );
}