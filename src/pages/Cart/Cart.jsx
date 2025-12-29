import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getCartAmount,
    getFinalAmount,
    deliveryFee,
    discount,
    applyPromoCode
  } = useContext(StoreContext)

  const [promoInput, setPromoInput] = useState("")
  const [promoMsg, setPromoMsg] = useState("")

  const handleApplyPromo = () => {
    const success = applyPromoCode(promoInput)
    setPromoMsg(success ? "Promo applied successfully 🎉" : "Invalid promo code ❌")
  }

  const navigate = useNavigate();

  return (
    <div className="cart">

      <h2>Your Cart</h2>

      {/* CART ITEMS */}
      <div className="cart-items">
        {food_list.map(item => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-item" key={item._id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  <div className="cart-quantity">
                    <button onClick={() => removeFromCart(item._id)}>-</button>
                    <span>{cartItems[item._id]}</span>
                    <button onClick={() => addToCart(item._id)}>+</button>
                  </div>
                </div>

                <p className="cart-item-total">
                  ₹{item.price * cartItems[item._id]}
                </p>
              </div>
            )
          }
          return null
        })}
      </div>

      {/* CART SUMMARY */}
      <div className="cart-summary">

        <div className="cart-summary-row">
          <span>Subtotal</span>
          <span>₹{getCartAmount()}</span>
        </div>

        <div className="cart-summary-row">
          <span>Delivery Fee</span>
          <span>₹{deliveryFee}</span>
        </div>

        {discount > 0 && (
          <div className="cart-summary-row discount">
            <span>Discount ({discount}%)</span>
            <span>-₹{(getCartAmount() * discount) / 100}</span>
          </div>
        )}

        {/* PROMO CODE */}
        <div className="promo-box">
          <input
            type="text"
            placeholder="Enter promo code"
            value={promoInput}
            onChange={(e) => setPromoInput(e.target.value)}
          />
          <button onClick={handleApplyPromo}>Apply</button>
        </div>

        {promoMsg && <p className="promo-msg">{promoMsg}</p>}

        <hr />

        <div className="cart-summary-total">
          <span>Total Payable</span>
          <span>₹{getFinalAmount()}</span>
        </div>

        <button className="checkout-btn" onClick={()=>navigate('/order')}>
          Proceed to Checkout
        </button>

      </div>

    </div>
  )
}

export default Cart
