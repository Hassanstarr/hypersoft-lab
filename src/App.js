import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './component/NavBar.jsx';
import Home from './component/Home.jsx'
import Research from './component/Research.jsx'
import People from './component/People.jsx'
import Publications from './component/Publications.jsx'
import ContactAffiliations from './component/ContactAffiliations.jsx'
import Footer from './component/Footer.jsx'
import TailoredDecision from './component/TailoredDecision.jsx'
import SupplyChain from './component/SupplyChain.jsx'
import DiagnosticSupport from './component/DiagnosticSupport.jsx'
import AnalyzingIntuitionistic from './component/AnalyzingIntuitionistic.jsx'
import PhotocatalyticMaterials from './component/PhotocatalyticMaterials.jsx'
import NotFound from './component/NotFound.jsx'
import './style/theme.css'
import './style/media.css'


function App() {
  return (
    <Router> 
      <NavBar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/research' element={<Research />} />
          <Route path='/people' element={<People />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/contact' element={<ContactAffiliations />} />
          <Route path='/research/tailored-decision-support' element={<TailoredDecision />} />
          <Route path='/research/supply-chain-management' element={<SupplyChain />} />
          <Route path='/research/diagnostic-support-systems' element={<DiagnosticSupport />} />
          <Route path='/research/analyzing-intuitionistic-data' element={<AnalyzingIntuitionistic />} />
          <Route path='/research/predictive-analysis-photocatalysis' element={<PhotocatalyticMaterials />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
