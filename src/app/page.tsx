'use client';

import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Products from '../components/Products.jsx';
import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
