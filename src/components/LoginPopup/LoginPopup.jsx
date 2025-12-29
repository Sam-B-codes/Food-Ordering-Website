// import React from 'react'
// import './LoginPopup.css'
// const LoginPopup = () => {
//   return (
//     <div className='login-popup'>
//       login
//     </div>
//   )
// }

// export default LoginPopup





import React, { useState } from 'react'
import './LoginPopup.css'

const LoginPopup = ({ setShowLogin }) => {

  const [isSignup, setIsSignup] = useState(false)

  return (
    <div className='login-popup'>
      <div className="login-popup-container">

        {/* Close Button */}
        <span className="login-popup-close" onClick={() => setShowLogin(false)}>
          ✕
        </span>

        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <p>
          {isSignup
            ? "Create your account to get started"
            : "Welcome back! Please login to your account"}
        </p>

        <form className="login-popup-form">

          {isSignup && (
            <input type="text" placeholder="Full Name" required />
          )}

          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />

          {isSignup && (
            <input type="password" placeholder="Confirm Password" required />
          )}

          <button type="submit">
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>

        <p className="login-popup-footer">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsSignup(false)}>Login</span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setIsSignup(true)}>Sign Up</span>
            </>
          )}
        </p>

      </div>
    </div>
  )
}

export default LoginPopup

