import '../styles/imageCarousel.scss'
import livingRoom from '/Living Room_1.png'
import office from '/office.png'
import kitchen from '/Kitchen Shot_3.png'
import bathroom from '/bathroom_white on counter.png'
import { motion } from 'framer-motion'

export default function ImageCarousel() {
    const hoverAnimation = {scale: 1.1, transition: {delay: 0.3, duration: 0.5}}
    return (
        <motion.div className='carousel-container'>
            <div className='carousel-image-container'>
                <motion.img whileHover={hoverAnimation} src={livingRoom} alt='Living Room' className='carousel-image'/>
                <p className='carousel-text'>living Room</p>
            </div>
            <div className='carousel-image-container'>
                <motion.img whileHover={hoverAnimation} src={office} alt='Office' className='carousel-image'/>
                <p className='carousel-text'>office</p>
            </div>
            <div className='carousel-image-container'>
                <motion.img whileHover={hoverAnimation} src={kitchen} alt='Kitchen' className='carousel-image'/>
                <p className='carousel-text'>kitchen</p>
            </div>
            <div className='carousel-image-container'>
                <motion.img whileHover={hoverAnimation} src={bathroom} alt='Bathroom' className='carousel-image'/>
                <p className='carousel-text'>bathroom</p>
            </div>
            <div className='text-container'>
                <p className='subtitle'>WHERE YOU NEED IT,</p>
                <h1 className='title'>when you <br/> need it</h1>
            </div>
        </motion.div>
    )
}