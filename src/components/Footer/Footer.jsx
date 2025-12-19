import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe'
export default function Footer() {
  return (
    <>
     <footer>
    
 <div className="container">
     <div className="footer-top row">
    <div className="footer-section col-md-3">
      <h3>LOCATION</h3>
      <p>2215 John Daniel Drive</p>
      <p>Clark, MO 65243</p>
    </div>
    <div className="footer-section col-md-3">
      <h3>AROUND THE WEB</h3>
      <div className="social-icons">
        <a href="#" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" aria-label="LinkedIn">
    <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="#" aria-label="Website">
          <FontAwesomeIcon icon={faGlobe} />
        </a>
      </div>
    </div>
    <div className="footer-section col-md-3 d-flex flex-column justify-content-center align-items-center">
      <h3 >ABOUT FREELANCER</h3>
      <p>
        Freelance is a free to use, licensed Bootstrap theme created <br /> by Route
      </p>
    </div>
  </div>
  

 </div>
 <div className="footer-bottom">Copyright © Your Website 2021</div>
     </footer>
    
    </>
  )
}
