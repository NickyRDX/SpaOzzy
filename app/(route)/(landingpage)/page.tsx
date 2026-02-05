import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import Servicios from './components/Servicios/Servicios'
import Testimonios from './components/Testimonios/Testimonios'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'
import VideoPre from './components/Video/VideoPre'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <VideoPre />
      <Servicios />
      <Testimonios />
      <Newsletter />
      <Footer />
    </>
  )
}
