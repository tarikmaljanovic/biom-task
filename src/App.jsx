import Navbar from "./components/navbar"
import WelcomeBanner from "./components/welcomeBanner"
import ShopSection from "./components/shopSection"
import ImageCarousel from "./components/imageCarousel"
import OptionsSection from "./components/optionsSection"
import FeedbackSection from "./components/feedbackSection"
import WipesSection from "./components/wipesSection"
import VideoSection from "./components/videoSection"
import InstagramCarousel from "./components/instagramCarousel"
import Footer from "./components/footer"

export default function App() {

  return (
    <>
      <Navbar />
      <WelcomeBanner />
      <ShopSection />
      <ImageCarousel />
      <OptionsSection />
      <FeedbackSection />
      <WipesSection />
      <VideoSection />
      <InstagramCarousel />
      <Footer />
    </>
  )
}
