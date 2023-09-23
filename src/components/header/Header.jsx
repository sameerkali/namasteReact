import React from 'react'
import './Header.css'
import { GamepadIcon } from 'lucide-react'

const Header = () => {
  return (
    <>
    <div className="header">
        <GamepadIcon className="left icon" /> <h2>GameRide_s</h2>
        <div className='nav-item'>
        <ul >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        </div>
        <div className="nav-item">
        <ul>
          <li>Cart</li>
          <button className="btn right " onClick={() => {}}>
            Login
          </button>
        </ul>
        </div>
      </div>
    </>
  )
}

export default Header