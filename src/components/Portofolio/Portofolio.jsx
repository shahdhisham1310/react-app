import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons'

import port1 from '../../assets/port1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'

export default function Portfolio() {
  React.useEffect(function () {
    document.title = 'portfolio';
  }, []);

    const [selectedImage, setSelectedImage] = useState(null)

  const images = [port1, port2, port3, port1, port2, port3]

  return (
    <>
      <section className="portfolio">
        <div className="container">
<div className="title mb-3"> <h2>PORTFOLIO COMPONENT</h2> <div className="starLine d-flex justify-content-center align-items-center"> <div className='line'></div> <FontAwesomeIcon className='star mx-3' icon={faStar} /> <div className='line'></div> </div> </div>
          <div className="row g-5 mt-4">
            {images.map((img, index) => (
              <div key={index} className="col-md-4">
                <div
                  className="portfolio-item position-relative"
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} className="img-fluid w-100" alt="" />

                  <div className="layer d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon className='plus-icon' icon={faPlus} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

     
      {selectedImage && (
        <div className="page-overlay" onClick={() => setSelectedImage(null)} >
          <div className="page-content">
            <img src={selectedImage} onClick={(e) => e.stopPropagation()}alt="" />
          </div>
        </div>
      )}
    </>
  )
}
