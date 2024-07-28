import { HashRouter } from 'react-router-dom'
import './App.css'
import Navibar from './components/Navibar'
import TopHeader from './components/TopHeader'
import FieldSection from './components/FieldSection'
import TacticImprove from './components/TacticImprove'
import WebFooter from './components/WebFooter'

function App() {

  return (
    <HashRouter>
      <div className=' d-flex justify-content-around mt-4'>
        <img src="vite.svg" alt="" />
        <Navibar />
      </div>
      <TopHeader />
      <FieldSection />
      <TacticImprove />
      <WebFooter />
    </HashRouter>
  )
}

export default App
