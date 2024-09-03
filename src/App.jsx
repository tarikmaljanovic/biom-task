import Navbar from "./components/navbar"
import WelcomeBanner from "./components/welcomeBanner"
import ShopSection from "./components/shopSection"
import ImageCarousel from "./components/imageCarousel"
import OptionsSection from "./components/optionsSection"
import FeedbackSection from "./components/feedbackSection"

export default function App() {

  return (
    <>
      <Navbar />
      <WelcomeBanner />
      <ShopSection />
      <ImageCarousel />
      <OptionsSection />
      <FeedbackSection />
    </>
  )
}
