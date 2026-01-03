import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo4} alt="" />
            {/* <p>We believe that hunger shouldn't have to wait. Our mission is to bridge the gap between your favorite local kitchens and your dining table with warrior-like precision and lightning speed. We aren't just a delivery service; we are your dedicated food messengers, ensuring every meal arrives fresh, hot, and exactly when you need it.</p> */}
            <p>It is more than just a place to eat—it is a destination where speed meets sophistication. Founded on the principle that high-quality, chef-inspired meals should be accessible whether you are sitting in our dining room or on your living room sofa, we have redefined the modern dining experience.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-222-345-6789</li>
                <li>contact@orangefork.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 @ OrangeFork.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
