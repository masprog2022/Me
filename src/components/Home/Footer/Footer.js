import React from 'react'
import './Footer.css'
import ImgFooter from '../../../assets/Home/shape-bg.png'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={ImgFooter} alt="No internet connect." />
      </div>
    </div>
  )
}
