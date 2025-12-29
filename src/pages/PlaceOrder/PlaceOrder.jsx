import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {
    getCartAmount,
    getFinalAmount,
    deliveryFee,
    discount
  } = useContext(StoreContext)

  return (
    <div className="place-order">

      {/* LEFT - DELIVERY DETAILS */}
      <div className="place-order-left">
        <h2>Delivery Information</h2>

        <div className="place-order-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Phone number" />
          <input type="text" placeholder="Street address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Pincode" />
        </div>
      </div>

      {/* RIGHT - ORDER SUMMARY */}
      <div className="place-order-right">
        <h2>Order Summary</h2>

        <div className="order-summary-row">
          <span>Subtotal</span>
          <span>₹{getCartAmount()}</span>
        </div>

        <div className="order-summary-row">
          <span>Delivery Fee</span>
          <span>₹{deliveryFee}</span>
        </div>

        {discount > 0 && (
          <div className="order-summary-row discount">
            <span>Discount ({discount}%)</span>
            <span>-₹{(getCartAmount() * discount) / 100}</span>
          </div>
        )}

        <hr />

        <div className="order-summary-total">
          <span>Total Payable</span>
          <span>₹{getFinalAmount()}</span>
        </div>

        <button className="place-order-btn">
          Place Order
        </button>
      </div>

    </div>
  )
}

export default PlaceOrder
