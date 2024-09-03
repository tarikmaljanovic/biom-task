import '../styles/optionsSection.scss';
import greenBiom from '/Green_1.png'
import whiteBiom from '/Biom fn .20.png'
import blackBiom from '/Black_2.png'
import { motion } from 'framer-motion';
import arrow from '../assets/Icon ionic-ios-arrow-round-forward.svg'

export default function OptionsSection() {

    return (
        <>
            <div className='options-section'>
                <div className='section-title'>
                    <h1 className='title'>Ready to start <br/> wiping out waste?</h1>
                    <div className='section-button'>
                        <span className='button-text'>CHOOSE YOUR VESSEL COLOR</span>
                        <img src={arrow} alt='arrow' />
                    </div>
                </div>
                <div className='right-section'>
                    <div className='option'>
                        <motion.img whileHover={{x: 50}} src={greenBiom} alt='green-biom' />
                        <div className='description'>
                            <h1 className='title'>Biom Dispenser</h1>
                            <p className='subtitle'>OCEAN TEAL</p>
                        </div>
                    </div>
                    <div className='option'>
                        <motion.img whileHover={{x: 50}} src={whiteBiom} alt='green-biom' />
                        <div className='description'>
                            <h1 className='title'>Biom Dispenser</h1>
                            <p className='subtitle'>WHITE</p>
                        </div>
                    </div>
                    <div className='option'>
                        <motion.img whileHover={{x: 50}} src={blackBiom} alt='green-biom' />
                        <div className='description'>
                            <h1 className='title'>Biom Dispenser</h1>
                            <p className='subtitle'>INK BLACK</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}