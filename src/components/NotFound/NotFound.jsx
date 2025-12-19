import React from 'react'

export default function NotFound() {
  React.useEffect(function () {
    document.title = '404';
  }, []);

  return (
  <section className="container bg-white d-flex flex-column justify-content-center align-items-center gap-3">
    <h2>Page Not Found !</h2>
    
  </section>
  )
}
