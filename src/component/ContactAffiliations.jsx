import React from 'react'
import Space from '../asset/space.jpg'
import '../style/ContactAffiliations.css'


const ContactAffiliations = () => {

  document.title = "Contact"
  
  return (
    <>

      <div className="title">
        <img src={Space} alt="" loading="lazy" />
        <h1 className='title-h1'>Contact & Affiliations</h1>
      </div>

      <div className='container-contact'>

        <div className='contact-block1'>
          <div className="row grid-contain-cl">
            <div className="contact-people">
              <div className="ca-block1">
                <div className='svg'>
                  <i className="fa-solid fa-envelope fa-2xl contact-svg"></i>
                </div>
                <div>
                  <h5>Prof. Dr. Muhammad Saeed</h5>
                  <p> <b>Email:</b> muhammad.saeed@umt.edu.pk </p>
                </div>
              </div>

              <div className="contact-people">
                <div className="ca-block1">
                  <div className='svg'>
                    <i className="fa-solid fa-envelope fa-2xl contact-svg"></i>
                  </div>
                  <div>
                    <h5>Muhammad Haris Saeed</h5>
                    <p>Personal Assistant</p>
                    <p> <b>Email:</b> abdullahsaeed74@gmail.com </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ca-block1">
              <div><i className="fa-solid fa-location-dot fa-2xl contact-svg"></i></div>
              <div>
                <h5>Department of Mathematics</h5>
                <p>School of Science</p>
                <p>University of Management and Technology</p>
                <p>C-II Johar Town, 54700, Lahore</p>
                <p>Pakistan</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default ContactAffiliations
