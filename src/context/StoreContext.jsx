// import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});


//   const addToCart = (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({
//         ...prev,
//         [itemId]: prev[itemId] + 1,
//       }));
//     }
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   useEffect(() => {
//     console.log(cartItems);
//   }, [cartItems]);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//   };
//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;



import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : {};
  });

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const deliveryFee = 40; // flat delivery charge

  /* ---------------- ADD TO CART ---------------- */
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  /* ---------------- REMOVE FROM CART ---------------- */
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;

      if (prev[itemId] === 1) {
        const updatedCart = { ...prev };
        delete updatedCart[itemId];
        return updatedCart;
      }

      return {
        ...prev,
        [itemId]: prev[itemId] - 1,
      };
    });
  };

  /* ---------------- CART TOTAL ---------------- */
  const getCartAmount = () => {
    let total = 0;

    for (let itemId in cartItems) {
      const itemInfo = food_list.find(
        (item) => item._id === itemId
      );
      if (itemInfo) {
        total += itemInfo.price * cartItems[itemId];
      }
    }
    return total;
  };

  /* ---------------- APPLY PROMO CODE ---------------- */
  const applyPromoCode = (code) => {
    const validCodes = {
      SAVE10: 10,
      SAVE20: 20,
      FREEDEL: 0,
    };

    if (validCodes[code]) {
      setPromoCode(code);
      setDiscount(validCodes[code]);
      return true;
    } else {
      setPromoCode("");
      setDiscount(0);
      return false;
    }
  };

  /* ---------------- FINAL AMOUNT ---------------- */
  const getFinalAmount = () => {
    const cartTotal = getCartAmount();
    const discountAmount = (cartTotal * discount) / 100;

    return cartTotal + deliveryFee - discountAmount;
  };

  /* ---------------- TOTAL ITEMS ---------------- */
  const getTotalCartCount = () => {
    let count = 0;
    for (let itemId in cartItems) {
      count += cartItems[itemId];
    }
    return count;
  };

  /* ---------------- LOCAL STORAGE ---------------- */
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getCartAmount,
    getFinalAmount,
    getTotalCartCount,
    deliveryFee,
    promoCode,
    discount,
    applyPromoCode,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
