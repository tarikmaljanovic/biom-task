import '../styles/shopSection.scss';
import biom from '/Mask Group 12@2x.png'
import beautifulDesign from '../assets/beautiful design icon.png'
import durable from '../assets/durable stainless icon.png'
import nonToxic from '../assets/non toxic icon.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect } from 'react';

export default function ShopSection() {
    const {scrollYProgress} = useScroll()
    
    const y = useTransform(scrollYProgress, [0, 0.2], [200, -300])
    const yMobile = useTransform(scrollYProgress, [0, 0.2], [-200, -400])


    return (
        <div className='shop-section-container'>
            <motion.p 
                className='sliding-text'
                style={{
                    rotate: -90,
                    y,
                    x: -300,
                }}
            >
                meet biom
            </motion.p>
            <motion.p
                className='sliding-text-mobile'
                style={{
                    rotate: -90,
                    y: yMobile,
                    x: -350,
                }}
            >meet biom</motion.p>
            <img src={biom} className='biom-image'/>
            <div className='shop-section-text'>
                <p className='subtitle'>THE BIOM DISPENSER</p>
                <h1 className='title'>Redefine your experience of clean.</h1>
                <p className='text'>A quality engineered wipes dispenser that looks beautiful in your home, making better habits for your home and planet always within reach.</p>
                <div className='feature'>
                    <img src={beautifulDesign} alt='Beautiful Design Icon' className='feature-icon'/>
                    <p className='feature-description'>Beautiful design, fit for your home</p>
                </div>
                <div className='feature'>
                    <img src={durable} alt='Durable Stainless Icon' className='feature-icon'/>
                    <p className='feature-description'>Durable stainless steel exterior</p>
                </div>
                <div className='feature'>
                    <img src={nonToxic} alt='Non Toxic Icon' className='feature-icon'/>
                    <p className='feature-description'>Non-toxic, BPA free</p>
                </div>
                <button className='shop-now'>SHOP NOW</button>
            </div>
        </div>
    )
}