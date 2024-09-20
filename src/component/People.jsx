import React from 'react'
import { useState } from 'react'
import nightSky from '../asset/night-sky.jpg'
import '../style/people.css'
import SirSaeed from '../asset/DrMuhammadSaeed.jpg'
import Harl from '../asset/Muhammad-Imran-Harl.png'
import Amna from '../asset/default-avatar-images.png'
import Fatima from '../asset/default-avatar-images.png'
import Neha from '../asset/default-avatar-images.png'
import Haris from '../asset/HarisSaeed.png'
import Mubashir from '../asset/Mubashir.png'
import Fadia from '../asset/default-avatar-images.png'
import Hassan from '../asset/Hassan.png'
import Sidra from '../asset/default-avatar-images.png'
import Arshad from '../asset/MuhammadArshad.png'
import Ihsan from '../asset/Muhammad-Ihsan.png'
import ShaziaRana from '../asset/ShaziaRana.png'
import JavaidAli from '../asset/JavaidAli-A.png'
import MuhammadAhsan from '..//asset/MuhammadAhsan-A.png'
import AtiqeUrRehman from '../asset/AtiqeUrRahman-A.png'
import MuhammadLuqman from '../asset/MuhammadLuqman-A.png'
import MaqsoodAhmad from '../asset/MaqsoodAhmad-A.png'
import FarhanTabassum from '../asset/default-avatar-images.png'
import NaveedJafar from '../asset/NaveedJafar-A.png'


const People = () => {

    document.title = "Affiliate Members"

    const graduateStudents = [
        {
            id: 1,
            name: 'Muhammad Imran Harl',
            imgSrc: Harl,
            education: 'Ph.D Scholar',
            email: 'imranharl0@gmail.com',
            researchAreas: 'Picture Fuzzy, SetBipoler Hypersoft set'
        },
        {
            id: 2,
            name: 'Amna Wasim',
            imgSrc: Amna,
            education: 'Ph.D Scholar',
            email: 'f2022265018@umt.edu.pk',
            researchAreas: 'Soft Lattice Modelling'
        },
        {
            id: 3,
            name: 'Fatima Razaq',
            imgSrc: Fatima,
            education: 'Ph.D Scholar',
            email: 'fatimarazaq98@gmail.com',
            researchAreas: 'fuzzy Hybrid Structures, Multi-Criteria Decision Making'
        },
        {
            id: 4,
            name: 'Neha Andakeeb Khalid',
            imgSrc: Neha,
            education: 'Ph.D Scholar',
            email: 'nehakhalid97@gmail.com',
            researchAreas: 'Neutrosophic Set & Systems'
        },
        {
            id: 5,
            name: 'Muhmmad Haris Saeed',
            imgSrc: Haris,
            education: 'MS Graduate',
            email: 'abdullahsaeed74@gmail.com',
            researchAreas: 'Fuzzy Hybrid Sturctures, Mathematialc Modelling, Optimization'
        },
        {
            id: 6,
            name: 'Mubashir Ali',
            imgSrc: Mubashir,
            education: 'MS Graduate',
            email: 'mubashiraligpcsf@gmail.com',
            researchAreas: 'Fuzzy Decision Making'
        },
        {
            id: 7,
            name: 'Fadia Khalid',
            imgSrc: Fadia,
            education: 'MS Graduate',
            email: 'fadiakhalid726@gmail.com',
            researchAreas: 'Mathematical Chemistry'
        }
    ];

    const undergraduateStudents = [
        {
            id: 1,
            name: 'Muhammad Hassan',
            imgSrc: Hassan,
            education: 'BS Student',
            email: 'f2023070003@umt.edu.pk',
            description: 'Muhammad Hassan is a BS Mathematics with AI student at University of Management and Technology, Lahore. Passionate about programming, currently focused on React.js development and mastering backend technologies, laying the groundwork for a future as a software engineer where equations meet elegant code.'
        },
        {
            id: 2,
            name: 'Sidra Saeed',
            imgSrc: Sidra,
            education: 'BS Student',
            email: '',
            description: ''
        }
    ];

    const alumni = [
        {
            id: 1,
            name: 'Javaid Ali',
            imgSrc: JavaidAli,
            education: 'Ph.D (2014-2019)',
            email: 'javaidaliwaseer@gmail.com',
            description: 'Punjab Higher Education Department Lahore Pakistan (Govt. College Township) · Department of Mathematics Ph. D Mathematics'
        },
        {
            id: 2,
            name: 'Muhammad Luqman',
            imgSrc: MuhammadLuqman,
            education: 'Ph.D (2014-2019)',
            email: 'luqmanmalik196@gmail.com',
            description: 'University of Management and Technology (Pakistan) | UMT · Department of Mathematics Ph. D Mathematics'
        },
        {
            id: 3,
            name: 'Muhammad Farhan Tabassum',
            imgSrc: FarhanTabassum,
            education: 'Ph.D (2013-2020)',
            email: 'farhanuet12@gmail.com',
            description: "Muhammad Farhan Tabassum's research while affiliated with University of Lahore and other places"
        },
        {
            id: 4,
            name: 'Maqsood Ahmad',
            imgSrc: MaqsoodAhmad,
            education: 'Ph.D (2013-2021)',
            email: 'mahmad@ciitlahore.edu.pk',
            description: 'COMSATS University Islamabad | CUI · Department of Mathematics PhD'
        },
        {
            id: 5,
            name: 'Muhammad Naveed Jafar',
            imgSrc: NaveedJafar,
            education: 'Ph.D (2012-2022)',
            email: 'naveedjafarphd@gmail.com',
            description: 'University of Management and Technology (Pakistan) | UMT · Department of Mathematics Doctor of Philosophy'
        },
        {
            id: 6,
            name: 'Muhammad Ahsan',
            imgSrc: MuhammadAhsan,
            education: 'Ph.D (2018-2022)',
            email: 'ahsan1826@gmail.com',
            description: 'University of Management and Technology (Pakistan) | UMT · Department of Mathematics Ph.D'
        },
        {
            id: 7,
            name: 'Atiqe Ur Rehman',
            imgSrc: AtiqeUrRehman,
            education: 'Ph.D (2019-2023)',
            email: 'aurkhb@gmail.com',
            description: 'University of Management and Technology (Pakistan) | UMT · Department of Mathematics Ph.D. Mathematics'
        },
        {
            id: 8,
            name: 'Shazia Rana',
            imgSrc: ShaziaRana,
            education: 'Ph.D (2018-2024)',
            email: 'shaziaranams@gmail.com',
            description: 'COMSATS University Islamabad | CUI · Department of Mathematics Master of Philosophy'
        },
        {
            id: 9,
            name: 'Muhammad Arshad',
            imgSrc: Arshad,
            education: 'Ph.D (2019-2024)',
            email: 'maakhb84@gmail.com',
            description: 'University of Management and Technology (Pakistan) | UMT · Department of Mathematics Research Associate at University of Management and Technology Lahore, Pakistan.'
        },
        {
            id: 10,
            name: 'Muhammad Ihsan',
            imgSrc: Ihsan,
            education: 'Ph.D (2019-2024)',
            email: 'mihkhb@gmail.com',
            description: 'University of Management and Technology (Pakistan) | UMT · Department of Mathematics Ph.D scholar Mathematics'
        }
    ];

    const scholarsSupervised = [
        {
            id: 1,
            name: 'Shazia Rana',
            thesisTitle: 'Development of Subjective, Attributive Combined Consciousness Model (SACCM) along with Plithogenic whole Hyper Soft Sets (PWHSS) and Multi Attributive Decision-Making Techniques in Plithogenic Environment.',
            yearOfPassing: 2024
        },
        {
            id: 2,
            name: 'Muhammad Ihsan',
            thesisTitle: 'Hybridized Framework of Soft Set variants under Multi- Decisive Opinions Based Environment with Applications',
            yearOfPassing: 2024
        },
        {
            id: 3,
            name: 'Muhammad Arshad',
            thesisTitle: 'Assessment of Decision-Making Evaluation Techniques on Hypersoft Set with Interval-Valued Fuzzy Like Settings',
            yearOfPassing: 2024
        },
        {
            id: 4,
            name: 'Atiqe-Ur-Rahman',
            thesisTitle: 'Development of Embedded Framework of Parameterized Multi-Argument Soft Set-like Models under Possibility, Complex and Convex Settings with Applications',
            yearOfPassing: 2023
        },
        {
            id: 5,
            name: 'Muhammad Ahsen',
            thesisTitle: 'Development of Algorithmic Framework based on Mappings in the hybrids of Hypersoft Structures with applications in Medical Diagnosis',
            yearOfPassing: 2022
        },
        {
            id: 6,
            name: 'Naveed Jafar',
            thesisTitle: 'Development of Techniques to Solve Multi-Objective, Multi-Attributes with Disjoint Attributive Value Problems Neutrosophic Hypersoft set Environment',
            yearOfPassing: 2022
        },
        {
            id: 7,
            name: 'Farhan Tabassum',
            thesisTitle: 'Stochastic algorithms for practical Optimization',
            yearOfPassing: 2021
        },
        {
            id: 8,
            name: 'Maqsood Ahmed',
            thesisTitle: 'Topological Invariants of Molecular Graphs',
            yearOfPassing: 2021
        },
        {
            id: 9,
            name: 'Javaid Ali',
            thesisTitle: 'Development of Hybrid Meta-Heuristics for Global optimization',
            yearOfPassing: 2019
        },
        {
            id: 10,
            name: 'Muhammad Luqman',
            thesisTitle: 'Hybrid nature-inspired algorithms for engineering design optimization problems',
            yearOfPassing: 2019
        }
    ];

    const msGraduatesSupervised = [
        { id: 1, name: 'Naveed Qamar', thesisTitle: 'Development of Spherical Fuzzy Hypersoft Set With Applications', yearOfPassing: 2023 },
        { id: 2, name: 'Faisal Rahim', thesisTitle: 'Interval-Valued Neutrosophic Fuzzy Set and its Application for Supplier Selection', yearOfPassing: 2023 },
        { id: 3, name: 'Mehr-Un-Nisa', thesisTitle: 'Detecting Patterns of Infection-Induced Fertility Using Fermatean Neutrosophic Set with Similarity Analysis', yearOfPassing: 2023 },
        { id: 4, name: 'Kinza Kareem', thesisTitle: 'A Theoretical Approach towards Interval-Valued Neutrosophic Fuzzy Soft Set like Structures with Applications', yearOfPassing: 2023 },
        { id: 5, name: 'Mubashir Ali', thesisTitle: 'An Innovative Approach to Passport Quality Assessment Based on Possibility Q-rung Orthopair Fuzzy Hypersoft Set', yearOfPassing: 2023 },
        { id: 6, name: 'Rimsha Shafaqat', thesisTitle: 'A theoretical Development of Cubic Pythagorean Fuzzy Soft Set', yearOfPassing: 2022 },
        { id: 7, name: 'Misbah Khalid', thesisTitle: 'Development of Distance Measure for Cubic Intuitionistic Fuzzy Hypersoft Set with Application', yearOfPassing: 2022 },
        { id: 8, name: 'Sana Naz Maqbool', thesisTitle: 'Formation of the Neutrosophic Cubic Hypersoft Set with Application in Decision Making', yearOfPassing: 2021 },
        { id: 9, name: 'Ume-e-Farwa', thesisTitle: 'Decision-Making Algorithmic Technique based on Single Valued Neutrosophic Fuzzy Hypersoft Set', yearOfPassing: 2021 },
        { id: 10, name: 'Abida Hafeez', thesisTitle: 'Decision-Making Algorithmic Technique Based on Bijective Hypersoft Set', yearOfPassing: 2021 },
        { id: 11, name: 'Muhammad Amad Sarwar', thesisTitle: 'Soil Fertility Analysis and Recommendation of Fertilizer by using Distance and Similarity Measurements of Fuzzy Set', yearOfPassing: 2021 },
        { id: 12, name: 'Arshan Shaukat', thesisTitle: 'A Theoretical Approach for the Development of Cubic Hypersoft set', yearOfPassing: 2021 },
        { id: 13, name: 'Hammad Qamar', thesisTitle: 'Technique for reducing dimensionality of data in decision making utilizing Interval valued Neutrosophic soft matrix', yearOfPassing: 2021 },
        { id: 14, name: 'Nadeem Ahmed', thesisTitle: 'Generalized Neutrosophic hyper soft set with properties and TOPSIS technique for supplier selection in production industry', yearOfPassing: 2020 },
        { id: 15, name: 'Atta Ur Rehman', thesisTitle: 'Similarity Measures of intuitionistic fuzzy hyper soft set with Applications', yearOfPassing: 2020 },
        { id: 16, name: 'Rimsha Zofashan', thesisTitle: 'A Development of Multi-Polar Softs Set with Application', yearOfPassing: 2020 },
        { id: 17, name: 'Awais Nasir', thesisTitle: 'Similarity measures on M-polar interval valued Pythagorean fuzzy sets and M-polar interval valued Pythagorean fuzzy soft sets', yearOfPassing: 2020 },
        { id: 18, name: 'Asad Zia', thesisTitle: 'Development of m-polar intuitionistic fuzzy soft set with application in Medical Diagnosis of Kidney Disease', yearOfPassing: 2020 },
        { id: 19, name: 'Sahrish Mahmood', thesisTitle: 'Hybridization of Soft Expert Set with AHP in Decision Making', yearOfPassing: 2018 },
        { id: 20, name: 'Hina Taufeeq', thesisTitle: 'Hybridization of AHP with GTMA', yearOfPassing: 2018 },
        { id: 21, name: 'Muhammad Adeel', thesisTitle: 'Stability of Galaxy in f(R) Filament', yearOfPassing: 2018 },
        { id: 22, name: 'Syeda Binte-Zahra', thesisTitle: 'Comparative study of Teaching learning-based optimization algorithm, Shuffled frog leaping algorithm and Imperialist competitive algorithm on some engineering design problems', yearOfPassing: 2018 },
        { id: 23, name: 'Faiz Farid', thesisTitle: 'Soft Zorn’s Lemma', yearOfPassing: 2017 },
        { id: 24, name: 'Muzammil Ali', thesisTitle: 'A study on TOPSIS in classical, fuzzy intuitionistic fuzzy and neutrosophic environments', yearOfPassing: 2017 },
        { id: 25, name: 'Ghulam Rasool', thesisTitle: 'Some properties of Soft Norm on Soft Linear Space', yearOfPassing: 2017 },
        { id: 26, name: 'Azhar Hussain', thesisTitle: 'N-Framed soft set with basic operations: A generalization of double framed soft set', yearOfPassing: 2016 },
        { id: 27, name: 'Muhammad Zulqarnain', thesisTitle: 'Comparative study of Fuzzy Soft Matrix and Interval valued fuzzy soft matrix in decision making', yearOfPassing: 2016 },
        { id: 28, name: 'Nagina Fatima', thesisTitle: 'Design Optimization of vehicle suspension with quarter car model', yearOfPassing: 2015 },
        { id: 29, name: 'Alia Naseem', thesisTitle: 'General solutions for free convection flow of Casson fluid over an infinite vertical plate', yearOfPassing: 2015 },
        { id: 30, name: 'Muhammad Nadeem Ahmed', thesisTitle: 'An Extension of Normalizer, Centralizer, Centre and Automorphism of Groups in Soft Groups', yearOfPassing: 2015 }
    ];


    const [copied, setCopied] = useState(false);

    const copyText = (text) => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }).catch(() => {
            fallbackCopyTextToClipboard(text);
          });
        } else {
          fallbackCopyTextToClipboard(text);
        }
      };
    
      const fallbackCopyTextToClipboard = (text) => {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };
    

    return (
        <>

            <div className="title">
                <img src={nightSky} alt="" loading="lazy" />
                <h1 className='title-h1'>People</h1>
            </div>
            

            <div className='faculty'>
                <div className="head">
                    Faculty
                </div>

                <div className='faculty-body'>
                    <div>
                        <img src={SirSaeed} alt="Prof. Dr. Muhammad Saeed" />
                    </div>

                    <div className='faculty-body-container'>
                        <h2>Prof. Dr. Muhammad Saeed</h2>
                        <br />
                        <p>
                            Dr. Muhammad Saeed is a Full Professor at Department of Mathematics, School of Science, University of Management and Technology Lahore, Pakistan. He received Ph.D. (Mathematics) degree from Quaid-i-Azam University Pakistan in 2012. He has published more than 190 research items in international and national peer reviewed journals with 1983 Google Scholar citations (h-index=24, i10-index-60). He is the reviewer of more than 20 peer reviewed journals. He edited a book "Theory of Hypersoft Set and Application" that is published by well-known publisher "PONS Publishing House, Brussels, Belgium". He visited George Mason University Fairfax, Virginia, United States in 2016 for the program "Collaboration for Faculty Enhancement in Teaching and Research (CFETR)". He has served as "Chairman Department of Mathematics" from 2014 to 2020. He is the founder of more than 30 mathematical structures like "Complex Fuzzy Hypersoft Set","Bijective Hypersoft set", etc.
                        </p>
                    </div>
                </div>
            </div>

            {copied && <div className="copy-popup">Email copied to clipboard!</div>}

            <div className='ungraduate-students'>

                <div className='head'>
                    Graduate Students
                </div>

                <div class="gscard-container">

                    {graduateStudents.map((student) => (
                        <div className="gscard" key={student.id}>
                            <img src={student.imgSrc} alt={student.name} />
                            <h4>{student.name}</h4>
                            <div>
                                <div>
                                    <b>{student.education}</b>
                                </div>
                                {student.email && <div className="svg" onClick={() => copyText(student.email)} title="Copy Email">
                                    <i className="fa-solid fa-envelope fa-xl gscard-svg"></i>
                                </div>}
                            </div>
                            <p><b>Research Areas:</b> &nbsp; {student.researchAreas}</p>
                        </div>
                    ))}

                </div>

            </div>


            <div className='ungraduate-students'>

                <div className='head'>
                    Undergraduate
                </div>

                <div class="gscard-container">

                    {undergraduateStudents.map((student) => (
                        <div className="gscard" key={student.id}>
                            <img src={student.imgSrc} alt={student.name} />
                            <h4>{student.name}</h4>
                            <div>
                                <div>
                                    <b>{student.education}</b>
                                </div>
                                {student.email && <div className="svg" onClick={() => copyText(student.email)} title="Copy Email">
                                    <i className="fa-solid fa-envelope fa-xl gscard-svg"></i>
                                </div>}
                            </div>
                            <p>{student.description}</p>
                        </div>
                    ))}

                </div>

            </div>



            <div className='Alumni'>

                <div className='head'>
                    Alumni
                </div>


                <div className='gscard-container'>

                    {alumni.map((alum) => (
                        <div className="gscard" key={alum.id}>
                            <img src={alum.imgSrc} alt={alum.name} />
                            <h4>{alum.name}</h4>
                            <div>
                                <div>
                                    <b>{alum.education}</b>
                                </div>
                                {alum.email && <div className="svg" onClick={() => copyText(alum.email)} title="Copy Email">
                                    <i className="fa-solid fa-envelope fa-xl gscard-svg"></i>
                                </div>}
                            </div>
                            <p>{alum.description}</p>
                        </div>
                    ))}

                </div>

            </div>


            <div>

                <div className='head'>
                    List of Students Supervised
                </div>


                <div className='Supervised'>

                    <div className="sub-heading">Ph.D Scholars Supervised</div>

                    <table>
                        <thead>
                            <tr>
                                <th>Sr. No</th>
                                <th>Name</th>
                                <th>Thesis Title</th>
                                <th>Year of Passing</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scholarsSupervised.map((scholar) => (
                                <tr key={scholar.id}>
                                    <td>{scholar.id}</td>
                                    <td>{scholar.name}</td>
                                    <td>{scholar.thesisTitle}</td>
                                    <td>{scholar.yearOfPassing}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                    <div className="sub-heading">MS Graduates Supervised</div>

                    <table>
                        <thead>
                            <tr>
                                <th>Sr. No</th>
                                <th>Name</th>
                                <th>Thesis Title</th>
                                <th>Year of Passing</th>
                            </tr>
                        </thead>
                        <tbody>
                            {msGraduatesSupervised.map((graduate) => (
                                <tr key={graduate.id}>
                                    <td>{graduate.id}</td>
                                    <td>{graduate.name}</td>
                                    <td>{graduate.thesisTitle}</td>
                                    <td>{graduate.yearOfPassing}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                </div>

            </div>


        </>
    )
}

export default People