import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import WhatWeOffer from '../components/WhatWeOffer';
import WhyChooseMakeistan from '../components/why-choose-makeistan';
import OurPartners from '../components/our-partners';
import Gallery from '../components/Gallery';
import FounderMessage from '../components/FounderMessage';
import Footer from '../components/Footer';
import { getGalleryImages } from '../lib/getGalleryImages';

export default function Home() {
  const images = getGalleryImages();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhatWeOffer />
      <WhyChooseMakeistan />
      <OurPartners />
      <Gallery images={images} />
      <FounderMessage />
      <Footer />
    </main>
  );
}