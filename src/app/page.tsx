import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import WhatWeOffer from '../components/WhatWeOffer';
import Stats from '../components/Stats';
import WhyChooseMakeistan from '../components/why-choose-makeistan';
import OurPartners from '../components/our-partners';
import FounderMessage from '../components/FounderMessage';
import HomeCta from '../components/HomeCta';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhatWeOffer />
      <Stats />
      <WhyChooseMakeistan />
      <OurPartners />
      <FounderMessage />
      <HomeCta />
      <Footer />
    </main>
  );
}