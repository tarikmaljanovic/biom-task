import '../styles/welcomeBanner.scss';
import welcomeBanner from '/Kitchen_3.png'

export default function WelcomeBanner() {
    return (
        <div className="welcome-banner-container">
            <div className='image-container'>
                <img src={welcomeBanner} alt="Welcome Banner" className="banner-image" />
            </div>
            <div className="banner-text">
                <h1 className='title'>So fresh.<br/> So green.</h1>
                <p className='subtitle'>We believe that a more eco-friendly everyday makes a happier you and me. We’re on a mission to put sustainability in reach with better-for-the-planet wipes that are easy, effective, and plastic-free.</p>
                <button className='get-started'>GET STARTED</button>
            </div>
        </div>
    )
}

