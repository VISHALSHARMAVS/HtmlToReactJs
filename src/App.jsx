


     import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Feature from './components/Feature'
import Benifit from './components/Benifts'
import HowItWorks from './components/HowItWorks'
import CaseStudy from './components/CaseStudy'
import KeepInTounch from './components/KeepInTouch'
import Review from './components/Review'
import Client from './components/Client'
import Footer from './components/Footer'

function App() {
 return (
    <div className=' overflow-hidden'>
    <Header/>
      <Banner/>
      <Feature/>
      <Benifit>
      </Benifit>
      <Client/>
      <HowItWorks/>
      <CaseStudy/>
      <Review/>
      <KeepInTounch/>
      <Footer/>
    </div>)

 }

export default App
