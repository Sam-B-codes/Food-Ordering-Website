import React from 'react'
import './Reservation.css'

const Reservation = () => {
  return (
    <div className="reservation">

      <div className="reservation-container">
        <h2>Online Table Reservation</h2>
        <p>
          Reserve your table in advance and enjoy a seamless dining experience with us.
        </p>

        <form className="reservation-form">

          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="form-row">
            <input type="tel" placeholder="Phone Number" required />
            <input type="number" placeholder="Number of Guests" min="1" required />
          </div>

          <div className="form-row">
            <input type="date" required />
            <input type="time" required />
          </div>

          <textarea
            placeholder="Special requests (optional)"
            rows="4"
          ></textarea>

          <button type="submit">Book Table</button>

        </form>
      </div>

    </div>
  )
}

export default Reservation
