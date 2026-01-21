import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import Servicios from './components/Servicios/Servicios'
import Testimonios from './components/Testimonios/Testimonios'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Servicios />
      <Testimonios />
      <Newsletter />
      <Footer />
    </>
  )
}
