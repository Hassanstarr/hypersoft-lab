import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Research.css'
import bgSky from '../asset/bg-sky.jpg'
import TailoredDecision from '../asset/Tailored-Decision.png'
import SupplyChain from '../asset/Supply-chain.png'
import DiagnosticSupport from '../asset/Diagnostic-support-systems.png'
import AnalyzingIntuitionistic from '../asset/Human-intuitionistic-data.png'
import PhotocatalyticMaterials from '../asset/Predicitive-Analysis.png'


const Research = () => {

    document.title = "Researchs"
    
  return (
    <>

      <div className="title">
        <img src={bgSky} alt="" loading="lazy" />
        <h1 className='title-h1'>Research</h1>
        <button className='btn btn-lg btn-outline-primary btn-publications'><a href="https://www.researchgate.net/"  target='blank'>We are on Research Gate</a></button>
      </div>


      <div className="card-container">
            <div class="column">
                <Link to={'/research/tailored-decision-support'} >
                    <div class="card">
                        <img src={TailoredDecision} alt="" />
                        <h5> Tailored Decision Support Systems for specialized scenarios </h5>
                        <span>Developing personalized Decision Support Systems tailored to specific scenarios to enhance decision-making efficiency and effectiveness. </span>
                    </div>
                </Link>
                <Link to={'/research/supply-chain-management'} >
                    <div class="card">
                        <img src={SupplyChain} alt="" />
                        <h5>Supply Chain Management</h5>
                        <span>Optimizing end-to-end Supply Chain Management strategies for streamlined operations, enhanced efficiency, and improved resilience in dynamic business environments.</span>
                    </div>
                </Link>
            </div>

            <div class="column">
                <Link to={'/research/diagnostic-support-systems'} >
                    <div class="card">
                        <img style={{aspectRatio: 1/1}} src={DiagnosticSupport} alt="" />
                        <h5>Diagnostic Support Systems for Infectious and Non-Infectious Diseases</h5>
                        <span>Advancing diagnostic support systems to enable accurate and timely detection of both infectious and non-infectious diseases, integrating cutting-edge technologies for improved healthcare outcomes.</span>
                    </div>
                </Link>
            </div>
            
            <div class="column">
                <Link to={'/research/analyzing-intuitionistic-data'} >
                    <div class="card">
                        <img src={AnalyzingIntuitionistic} alt="" />
                        <h5>Analyzing and Interpreting Human Intuitionistic Data </h5>
                        <span>Exploring methodologies for the analysis and interpretation of human intuitionistic data to unravel nuanced decision-making processes in complex and uncertain environments.</span>
                    </div>
                </Link>
                <Link to={'/research/predictive-analysis-photocatalysis'} >
                    <div class="card">
                        <img src={PhotocatalyticMaterials} alt="" />
                        <h5>Predictive Analysis of Photocatalytic Materials using Machine Learning </h5>
                        <span>Utilizing machine learning for predictive analysis of photocatalytic materials, advancing the design and optimization of efficient materials for sustainable and enhanced photocatalysis applications.</span>
                    </div>
                </Link>
            </div>
        </div>


    </>
  )
}

export default Research