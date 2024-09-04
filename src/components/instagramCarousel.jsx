import '../styles/instagramCarousel.scss';
import img1 from '/instagram_images/AdobeStock_372350085_Preview.png'
import img2 from '/instagram_images/Biom_wipe_6.png'
import img3 from '/instagram_images/kitchen_counter_low res.png'
import img4 from '/instagram_images/Green-Gold-and-Navy-Living_Kitty-and-B-by-Kat-G.png'
import img5 from '/instagram_images/Biom fn .23.png'
import img6 from '/instagram_images/AdobeStock_334130078_Preview.png'
import InstagramIcon from '@mui/icons-material/Instagram';

export default function InstagramCarousel() {
    return (
        <div className="instagram-carousel">
            <h1 className='title'>#cleanwithbiom</h1>
            <div className='carousel-container'>
                <div className='carousel'>
                    <div className='img-container'>
                        <img src={img1} alt='img1' />
                    </div>
                    <div className='img-container'>
                        <img src={img2} alt='img2' />
                    </div>
                    <div className='img-container'>
                        <img src={img3} alt='img3' />
                    </div>
                    <div className='img-container'>
                        <img src={img4} alt='img4' />
                    </div>
                    <div className='img-container'>
                        <img src={img5} alt='img5' />
                    </div>
                    <div className='img-container'>
                        <img src={img6} alt='img6' />
                    </div>
                </div>
            </div>
            <div className='section-button'>
                <span className='button-text'>FOLLOW US ON INSTAGRAM</span>
                <div className='icon-container'>
                    <InstagramIcon className='icon' />
                </div>
            </div>
        </div>
    )
}