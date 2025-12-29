// import React, { useState } from 'react'
// import './Navbar.css'
// import {assets} from '../../assets/assets'
// import { Link } from 'react-router-dom'
// import { StoreContext } from '../../context/StoreContext'

// const Navbar = ({setShowLogin}) => {

//     const [menu,setmenu]=useState("menu")

//     // const { getCartAmount} = useState(StoreContext);


//   return (
//     <div className='navbar'>
 
//     <Link to='./'> <img src={assets.logo} alt="" className='logo'/> </Link> 
//     <ul className='navbar-menu'>
//         <Link to='/' onClick={()=> setmenu("home")}  className={menu=== "home"?"active":""}>home</Link>
//         <a href='#explore-menu'  onClick={()=> setmenu("menu")} className={menu=== "menu"  ?"active":"" }>menu</a>
//         <a href='#app-download'  onClick={()=> setmenu("mobile-app")} className={menu=== "mobile-app"  ?"active":""}>mobile-app</a>
//         <a href='#footer'  onClick={()=> setmenu("contact us")} className={menu=== "contact us" ?"active":""}>contact us</a>
//     </ul>
//     <div className="navbar-right">
//         <img src={assets.search_icon} alt="" />
//         <div className="navbar-search-icon">
//            <Link to='/cart'> <img src={assets.basket_icon} alt="" /> </Link> 
//             <div className="dot"></div>
//         </div>
//         {/* <button onClick={()=>setShowLogin(true)}>Sign In</button> */}
//         <button onClick={() => setShowLogin(true)}>Sign In</button>
//     </div>
//     </div>
//   )
// }

// export default Navbar


import React, { useState, useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("menu")
  const { getTotalCartCount } = useContext(StoreContext)

  const cartCount = getTotalCartCount()

  return (
    <div className='navbar'>

      <Link to='/'>
        {/* <img src={assets.logo} alt="logo" className='logo' /> */}
        <img src={assets.logo2} alt="" className='logo' />
      </Link>

      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />

        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="cart" />
          </Link>

          {/* CART COUNT DOT */}
          {cartCount > 0 && (
            <div className="dot">
              {cartCount}
            </div>
          )}
        </div>

        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>

    </div>
  )
}

export default Navbar
