import React from 'react'
import x from '../../assets/avataaars.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
export default function Home() {
  React.useEffect(function () {
    document.title = 'home';
  }, []);

  return (
    <>
    <main className='text-center '> 
    <div className='container text-white d-flex flex-column justify-content-center align-items-center gap-3' >
        <img src={x} alt="profile" width='250' className='mb-4'/>
    <h2>START FRAMEWORK</h2>
    <div className="starLine d-flex justify-content-center align-items-center">
    <div className='line'></div>
    <FontAwesomeIcon className='star  mx-3' icon={faStar} />
    <div className='line'></div>
  </div>

  <p>Graphic Artist - Web Designer - Illustrator</p>
    
    
    
    </div>

    </main>
    
    
    </>
  )
}
