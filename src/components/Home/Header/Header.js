import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-parent">
        <div className="header-hamburger">
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </div>
        <div className="header-logo">
          <span className="header-logo-part1">Portfo</span>
          <span className="header-logo-part2">lio.</span>
        </div>

        <div className="header-menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">About Me</a>
            </li>
            <li>
              <a href="#services">Resume</a>
            </li>
            <li>
              <a href="#services">Portfolio</a>
            </li>
            <li>
              <a href="#about">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
