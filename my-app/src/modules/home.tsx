'use client'
import React from 'react'
import Header from '@/shared/widgets/header/header'
import Banner from './home/elements/Banner'
import Benefits from './home/elements/Benifits'
import Branding from './home/elements/branding'
import FeatureHighlight from './home/elements/FeatureHighlight'
import Footer from '@/shared/widgets/footer/footer'
function Home() {
  return (
    <div className='w-full sticky'>
        <Header />
        <Banner />
        <Branding />
        <Benefits />
        <FeatureHighlight />
       <Footer />
    </div>
  )
}

export default Home