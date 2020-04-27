import React from 'react';
import './scss/main.scss'
import Curso from './Curso'

const cursos = [
  {
    'image': 'https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png',
    'title': 'React desde Cero',
    'price': '20'
  },
  {
    'image': 'https://edteam-media.s3.amazonaws.com/courses/original/273c3c75-c615-44ee-bade-e41530524ac8.png',
    'title': 'Que framework elegir',
    'price': '0'
  },
  {
    'image': 'https://edteam-media.s3.amazonaws.com/courses/original/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png',
    'title': 'Manejo del estado en React',
    'price': '20'
  },
]

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img alt='Banner' className="main-banner__img" src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
          <div className="main-banner__data s-center">
            <h3 className="t2 s-mb-0">Cursos de EDteam</h3>
            <p>Tu futuro te esta esperando</p>
            <a href="https://ed.team/" className="button">Suscribirse</a>
          </div>
        </div>
      </div>
    </div>
    
    <div className='ed-grid m-grid-3'>
      {
        cursos.map( curso => <Curso image={ curso.image } price={ curso.price } title={ curso.title } /> )
      }
    </div>
  </>
)

export default App;
