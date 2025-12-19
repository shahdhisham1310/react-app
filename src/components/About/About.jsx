import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
export default function About() {
  React.useEffect(function () {
    document.title = 'about ';
  }, []);

  return (
    <>
    <section >
        <div className="container mt-4 p-5">
         <h2 className='text-white'>ABOUT COMPONENT</h2>
  <div className="starLine d-flex justify-content-center align-items-center my-3">
    <div className='line'></div>
    <FontAwesomeIcon className='star  mx-3' icon={faStar} />
    <div className='line'></div>
  </div>
<div className="twoSides d-flex text-start px-5 ">
<div><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p> </div>
<div><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p> </div>
</div>


        </div>
    </section>
    


    
    </>
  )
}
