import { useState,useEffect } from 'react'
import { Link, NavLink } from 'react-router'

export default function Navbar() {
   const [shrunk, setShrunk] = useState(false);
  let timeoutId; 
  function debounce(func, delay) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  }
  function onScroll() {
    if (window.scrollY > 30) {
      setShrunk(true);
    } else {
      setShrunk(false);
    }
  }

  useEffect(function () {
    
    window.addEventListener('scroll', function () {
      debounce(onScroll, 800); 
    });

  
    return function () {
      window.removeEventListener('scroll', function () {
        debounce(onScroll, 800);
      });
    };
  }, []);
  return (
    <>
    <nav className={`navbar navbar-expand-lg fixed-top ${shrunk ? 'shrink' : ''}`}>
  <div className="container">
    <Link className="navbar-brand text-white" to="/">
      START FRAMEWORK
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto ">
        <NavLink className="nav-link " a aria-current="page" to="/about">
          ABOUT
        </NavLink>
        <NavLink className="nav-link " to="/portfolio">
          PORTFOLIO
        </NavLink>
        <NavLink className="nav-link " to="/contact">
          CONTACT
        </NavLink>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}
