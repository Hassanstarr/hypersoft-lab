import React from 'react'
import { Link } from 'react-router-dom'
import Tailored from '../asset/tailored.jpg'
import Supply from '../asset/SupplyChain.png'
import Diagnostic from '../asset/Diagnostic.png'
import Intuitionistic from '../asset/IntuitionisticData.png'
import MachineLearning from '../asset/MachineLearning.png'
import TailoredDecision from '../asset/Tailored-Decision.png'
import SupplyChain from '../asset/Supply-chain.png'
import DiagnosticSupport from '../asset/Diagnostic-support-systems.png'
import AnalyzingIntuitionistic from '../asset/Human-intuitionistic-data.png'
import PhotocatalyticMaterials from '../asset/Predicitive-Analysis.png'
import '../style/Home.css'


const Home = () => {

    document.title = "Home"
    
    return (
        <>

            <div id="carouselExampleFade" class="carousel carousel-fade slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="5000">
                        <img src={Tailored} class="d-block w-100" alt="..." />  
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src={Supply} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src={Diagnostic} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src={Intuitionistic} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src={MachineLearning} class="d-block w-100" alt="..." />
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


            <div className="Home2">
                <h1>GROUP OVERVIEW</h1>
                <p>
                    Within the Hypersoft Research Group, we specialize in crafting advanced mathematical hybrid structures grounded in fuzzy set, soft set, hypersoft set, and neutrosophic set frameworks. Our focus lies in innovating disease diagnostic models tailored for a spectrum of infectious and non-infectious diseases. Additionally, we dedicate our expertise to developing decision support systems for diverse applications, including supply chain management, waste disposal, and conducting techno-economic analyses of materials. These efforts contribute to the evaluation of the sustainability of emerging technological systems shaping the future. Also, our focus extends to predictive modeling of photocatalytic materials using machine learning and AI, with the aim of developing synthesis support models. By integrating these advanced technologies, we aim to enhance the efficiency and precision of our research, pushing the boundaries of innovation in material synthesis and catalyzing advancements in sustainable technological systems.
                </p>
                <p>
                    Collaboration is a cornerstone of our research approach. We actively engage with individuals and groups at UMT, fostering synergy with various research entities in universities across Pakistan and internationally. Through these collaborations, we strive to cultivate holistic perspectives that enrich and elevate the depth of our research endeavors.
                </p>

                <button className='btn btn-lg btn-outline-primary'><a href="https://www.researchgate.net/lab/Dr-Muhammad-Saeeds-Hypersoft-Lab-Muhammad-Saeed"  target='blank'>We are on Research Gate</a></button>

            </div>


            <div className="card-container">
                <div class="column">
                    <Link to={'/research/tailored-decision-support'} >
                        <div class="card">
                            <img src={TailoredDecision} alt="Tailored Decision" />
                            <h5> Tailored Decision Support Systems for specialized scenarios </h5>
                            <span>Developing personalized Decision Support Systems tailored to specific scenarios to enhance decision-making efficiency and effectiveness. </span>
                        </div>
                    </Link>
                    <Link to={'/research/supply-chain-management'} >
                        <div class="card">
                            <img src={SupplyChain} alt="Supply Chain" />
                            <h5>Supply Chain Management</h5>
                            <span>Optimizing end-to-end Supply Chain Management strategies for streamlined operations, enhanced efficiency, and improved resilience in dynamic business environments.</span>
                        </div>
                    </Link>
                </div>

                <div class="column">
                    <Link to={'/research/diagnostic-support-systems'} >
                        <div class="card">
                            <img style={{aspectRatio: 1/1}} src={DiagnosticSupport} alt="Diagnostic Support" />
                            <h5>Diagnostic Support Systems for Infectious and Non-Infectious Diseases</h5>
                            <span>Advancing diagnostic support systems to enable accurate and timely detection of both infectious and non-infectious diseases, integrating cutting-edge technologies for improved healthcare outcomes.</span>
                        </div>
                    </Link>
                </div>
                
                <div class="column">
                    <Link to={'/research/analyzing-intuitionistic-data'} >
                        <div class="card">
                            <img src={AnalyzingIntuitionistic} alt="Analyzing Intuitionistic" />
                            <h5>Analyzing and Interpreting Human Intuitionistic Data </h5>
                            <span>Exploring methodologies for the analysis and interpretation of human intuitionistic data to unravel nuanced decision-making processes in complex and uncertain environments.</span>
                        </div>
                    </Link>
                    <Link to={'/research/predictive-analysis-photocatalysis'} >
                        <div class="card">
                            <img src={PhotocatalyticMaterials} alt="Photocatalytic Materials" />
                            <h5>Predictive Analysis of Photocatalytic Materials using Machine Learning </h5>
                            <span>Utilizing machine learning for predictive analysis of photocatalytic materials, advancing the design and optimization of efficient materials for sustainable and enhanced photocatalysis applications.</span>
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Home
