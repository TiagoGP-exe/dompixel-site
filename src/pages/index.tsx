import type { NextPage } from 'next'
import React from 'react'
import AboutSection from '../components/AboutSection'
import Certificates from '../components/Certificates'
import DomMethod from '../components/DomMethod'
import DoubtSection from '../components/DoubtSection'
import Footer from '../components/Footer'
import HomeSection from '../components/HomeSection'
import FirstJobSection from '../components/Jobs/FirstJobSection'
import SecondJobSection from '../components/Jobs/SecondJobSection'
import PowerBi from '../components/PowerBi'
import TeamSection from '../components/TeamSection'
import TestionialSection from '../components/TestimonialSection'

const Home: NextPage = () => (
  <div style={{ minHeight: '100vh', backgroundColor: '#F2F3F7' }}>
    <HomeSection />
    <AboutSection />
    <FirstJobSection />
    <SecondJobSection />
    <DomMethod />
    <TeamSection />
    <Certificates />
    <PowerBi />
    <TestionialSection />
    <DoubtSection />
    <Footer />
  </div>
)

export default Home
