import '../styles/videoSection.scss';

export default function VideoSection() {
    return (
        <div className='video-section'>
            <video className='video' autoPlay loop muted>
                <source src='/coverr-surfing-through-the-ocean-waves-4214-1080p.mp4'></source>
            </video>
            <div className='overlay-text'>
                <p className='subtitle'>CLEANING OUR OCEANS WITH EVERY WIPE</p>
                <h1 className='title'>Wipes have plastic in them. We don’t.</h1>
                <p className='text'>We reinvented wipes to cut out all the bad stuff —like single-use plastic that hurts the environment, and toxic chemicals that don’t belong in our oceans (or in our homes).</p>
                <button className='overlay-bttn'>LEARN MORE</button>
            </div>
        </div>
    )
}