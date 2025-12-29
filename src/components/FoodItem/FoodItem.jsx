// import React, { useContext} from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../context/StoreContext'
// const FoodItem = ({id,name,price,description,image}) => {

    
//     const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);


//   return (
//     <div className='food-item'>
//       <div className="food-item-img-container">
//         <img src={image} alt="" className="food-item-image" />
//         {!cartItems[id]
//         ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
//         :   <div className='food-item-counter'>
//             <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
//             <p>{ cartItems[id]}</p>
//             <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
//         </div>

//         }
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//             <p>{name}</p>
//             <img src={assets.rating_starts} alt="" />
//         </div>
//         <p className="food-item-description">
//             {description}
//         </p>
//         <p className="food-item-price">
//             {price}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default FoodItem


import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
  const itemCount = cartItems[id] || 0

  return (
    <div className="food-item">

      {/* Image Section */}
      <div className="food-item-img-container">
        <img
          src={image}
          alt={name}
          className="food-item-image"
          loading="lazy"
        />

        {/* Add / Counter */}
        {itemCount === 0 ? (
          <img
            className="add"
            src={assets.add_icon_white}
            alt="Add to cart"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="Remove item"
              onClick={() => removeFromCart(id)}
            />
            <p>{itemCount}</p>
            <img
              src={assets.add_icon_green}
              alt="Add item"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="food-item-info">

        <div className="food-item-name-rating">
          <p className="food-item-name">{name}</p>
          <img
            src={assets.rating_starts}
            alt="rating"
            className="food-item-rating"
          />
        </div>

        <p className="food-item-description">
          {description}
        </p>

        <p className="food-item-price">
          ₹{price}
        </p>
      </div>
    </div>
  )
}

export default FoodItem
