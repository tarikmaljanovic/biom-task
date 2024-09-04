import '../styles/footer.scss'
import logo from '../assets/logo.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import facebookIcon from '../assets/Icon awesome-facebook-f.svg'
import instagramIcon from '../assets/Icon ionic-logo-instagram.svg'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='background'></div>
            <div className='footer-container'>
                <div className='newsletter'>
                    <h1 className='title'>Get the latest news <br/> delivered to your inbox.</h1>
                    <p className='text'>Get access to the exciting stuff — exclusive new deals, product <br/> launches and more. Plus, get a 10% discount on your next order.</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email address' className='input' />
                        <button className='button'><ArrowForwardIcon/></button>
                    </div>
                </div>
                <div className='navigation'>
                    <div className='nav-items'>
                        <p className='nav-item'>SHOP</p>
                        <p className='nav-item'>WHY BIOM</p>
                        <p className='nav-item'>SCENTS</p>
                    </div>
                    <img src={logo} alt='logo' className='logo' />
                    <div className='nav-items'>
                        <p className='nav-item'>FAQS</p>
                        <p className='nav-item'>ACCOUNT</p>
                        <p className='nav-item'>HELP</p>
                    </div>
                </div>
                <div className='socials'>
                    <div className='copyright'>
                        <span className='text'>© 2021 biom. All rights reserved • Privacy Policy • Terms of Service</span>
                    </div>
                    <div className='social-icons'>
                        <div className='icon-container'>
                            <img src={instagramIcon} alt='instagram' className='icon' />
                        </div>
                        <div className='icon-container'>
                            <img src={facebookIcon} alt='facebook' className='icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}