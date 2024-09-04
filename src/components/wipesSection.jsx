import '../styles/wipesSection.scss';
import image1 from '/AdobeStock_377418446_Preview.png'
import image2 from '/Refill Packaging_Mockup_2.png'
import bioIcon from '../assets/biodegradable icon.png'
import recycleIcon from '../assets/plastic free icon.png'
import plantIcon from '../assets/plant based icon.png'

export default function WipesSection() {
    return (
        <div className='wipes-section'>
            <div className='background'></div>
            <div className='image-container'>
                <img src={image1} alt='Wipes' className='back-image' />
                <img src={image2} alt='Wipes' className='front-image' />
            </div>
            <div className='text-container'>
                <p className='subtitle'>BIOM WIPES</p>
                <h1 className='title'>Better for you, and the planet.</h1>
                <p className='text'>The experience of clean should feel amazing. In a time when we’re constantly sanitizing, it can be damaging to our hands and skins. We decided to load our wipes with Aloe to take care of you, while you take care of your home.</p>
                <div className='list'>
                    <div className='list-item'>
                        <img src={bioIcon} alt='Biodegradable Icon' />
                        <p className='item-text'>100% biodegradable</p>
                    </div>
                    <div className='list-item'>
                        <img src={recycleIcon} alt='Biodegradable Icon' />
                        <p className='item-text'>Plastic-free</p>
                    </div>
                    <div className='list-item'>
                        <img src={plantIcon} alt='Biodegradable Icon' />
                        <p className='item-text'>100% plant-based</p>
                    </div>
                </div>
                <button className='subscribe-button'>SUBSCRIBE NOW</button>
            </div>
        </div>
    )
}