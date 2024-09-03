import '../styles/feedbackSection.scss';

export default function FeedbackSection() {
    return (
        <div className='feedback-section'>
            <p className='subtitle'>WHAT PEOPLE ARE SAYING</p>
            <h1 className='feedback-content'>
                “Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”
            </h1>
            <p className='subtitle'>- RACHAEL H.</p>
            <div className='pagination'>
                <div className='pagination-dot active'></div>
                <div className='pagination-dot'></div>
                <div className='pagination-dot'></div>
                <div className='pagination-dot'></div>
            </div>
        </div>
    )
}