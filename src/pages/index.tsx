import type { NextPage } from 'next'
import React from 'react'
import AboutSection from '../components/AboutSection'
import Certificates from '../components/Certificates'
import DomMethod from '../components/DomMethod'
import DoubtSection from '../components/DoubtSection'
import Footer from '../components/Footer'
import HomeSection from '../components/HomeSection'
import PowerBi from '../components/PowerBi'
import TeamSection from '../components/TeamSection'
import TestionialSection from '../components/TestimonialSection'
import YouDoing from '../components/YouDoing'

import { lazy } from 'react'

const FirstJobSectionComponent = lazy(
  () => import('../components/Jobs/FirstJobSection')
)
const SecondJobSectionComponent = lazy(
  () => import('../components/Jobs/SecondJobSection')
)

const Home: NextPage = () => (
  <>
    <HomeSection />
    <AboutSection />
    <FirstJobSectionComponent />
    <SecondJobSectionComponent />
    <DomMethod />
    <TeamSection />
    <Certificates />
    <PowerBi />
    <TestionialSection />
    <YouDoing />
    <DoubtSection />
    <Footer />
  </>
)

export default Home
