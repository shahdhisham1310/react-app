
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
export default function Contact() {
  React.useEffect(function () {
    document.title = 'contact';
  }, []);

  const handleInput = (e) => {
    const el = e.currentTarget; // the <input>
    if (el.value.length > 0) {
  el.parentElement.classList.add('active');
} else {
  el.parentElement.classList.remove('active');
}
  };

  return (
    <>
     <section className='contact'>
       <div className="container ">
<div className="title">
    <h2>CONTACT SECTION</h2>
    <div className="starLine d-flex justify-content-center align-items-center">
    <div className='line'></div>
    <FontAwesomeIcon className='star mx-3' icon={faStar} />
    <div className='line'></div>
</div>
</div>
        <div className="form-container">
  <form className='text-start'>
  <div className="form-group">
    <input type="text" onInput={handleInput} />
    <label>userName</label>
  </div>
  <div className="form-group">
    <input type="number" onInput={handleInput} />
    <label>userAge</label>
  </div>
  <div className="form-group">
    <input type="email" onInput={handleInput} />
    <label>userEmail</label>
  </div>
  <div className="form-group">
    <input type="password" onInput={handleInput} />
    <label>userPassword</label>
  </div>
    <button type="submit">send Message</button>
  </form>
</div>
    </div>
 </section>
    
    </>
  )
}
