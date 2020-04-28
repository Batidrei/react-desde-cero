import React from 'react'

const Banner = () => (
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
          <img alt='Banner' className="main-banner__img" src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
          <div className="main-banner__data s-center">
          <h3 className="t2 s-mb-0">Cursos de EDteam</h3>
          <p>Tu futuro te esta esperando.</p>
          <a href="https://ed.team/" className="button">Suscribirse</a>
          </div>
      </div>
    </div>
  </div>
)


export default Banner