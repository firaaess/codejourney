import React from 'react'
import Hero from './components/hero/hero';
import Services from './components/services/services';
import Banner from './components/banner/banner';
import Subscribe from './components/subscribe/subscribe';
import Banner2 from './components/banner/banner2';
import Footer from './components/footer/footer'

const App = () => {
  return <main className='overflow-x-hidden bg-white text-dark'>
    <Hero />
    <Services />
    <Banner />
    <Subscribe />
    <Banner2 />
    <Footer />
  </main>
}

export default App;
