import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import Experience from '../components/Experience'
import BookingSection from '../components/BookingSection'
import GallerySection from '../components/GallerySection'
import LocationContact from '../components/LocationContact'
import Footer from '../components/Footer'

function App() {
  return(
    <>
    <body class="bg-dark-charcoal text-gray-200 font-sans overflow-x-hidden"></body>
    <Navigation/>
    <HeroSection/>
    <Experience/>
    <BookingSection/>
    <GallerySection/>
    <LocationContact/>
    <Footer/>

    </>
  )
}

export default App
