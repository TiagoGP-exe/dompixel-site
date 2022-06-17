import type { NextPage } from 'next'
import AboutSection from '../components/AboutSection'
import Certificates from '../components/Certificates'
import DomMethod from '../components/DomMethod'
import Footer from '../components/Footer'
import HomeSection from '../components/HomeSection'
import PowerBi from '../components/PowerBi'
import TeamSection from '../components/TeamSection'
import TestionialSection from '../components/TestimonialSection'
import YouDoing from '../components/YouDoing'

import dynamic from 'next/dynamic'
import Animation from '../components/Animation'

const DynamicFirstJobSection = dynamic(
  () => import('../components/Jobs/FirstJobSection')
)
const DynamicSecondJobSection = dynamic(
  () => import('../components/Jobs/SecondJobSection')
)

const DynamicYouDoing = dynamic(() => import('../components/YouDoing'))

const Home: NextPage = () => (
  <>
    <Animation />
    <HomeSection />
    <AboutSection />
    <DynamicFirstJobSection />
    <DynamicSecondJobSection />
    <DomMethod />
    <TeamSection />
    <Certificates />
    <PowerBi />
    <TestionialSection />
    <YouDoing />
    <DynamicYouDoing />
    <Footer />
  </>
)

export default Home
