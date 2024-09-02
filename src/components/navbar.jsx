import '../styles/navbar.scss'
import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="navbar">
            <div className='nav-items'>
                <p className='nav-item'>SHOP</p>
                <p className='nav-item'>WHY BIOM</p>
                <p className='nav-item'>SCENTS</p>
            </div>
            <div className='logo'>
                <img src={logo} alt='Biom Logo' />
            </div>
            <div className='nav-items'>
                <p className='nav-item'>SIGN IN</p>
                <span className='nav-item'>
                    CART
                    <img src={cart} alt='Cart' style={{marginLeft: '12px'}} />
                </span>
            </div>
            <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
                <motion.div className='line' animate={isOpen ? {rotate: 45, margin: 0, y: 8} : {}} ></motion.div>
                <motion.div className='line' animate={isOpen ? {opacity: 0} : {}}></motion.div>
                <motion.div className='line' animate={isOpen ? {rotate: -45, margin: 0, y: -8} : {}}></motion.div>
            </div>
        </div>
    )
}