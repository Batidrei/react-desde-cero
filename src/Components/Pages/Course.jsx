import React from 'react'

const cursos = [
  {
    'id': 1,
    'image': 'https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png',
    'title': 'React desde Cero',
    'price': 20
  },
  {
    'id': 2,
    'image': 'https://edteam-media.s3.amazonaws.com/courses/original/273c3c75-c615-44ee-bade-e41530524ac8.png',
    'title': 'Que framework elegir',
    'price': 0
  },
  {
    'id': 3,
    'image': 'https://edteam-media.s3.amazonaws.com/courses/original/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png',
    'title': 'Manejo del estado en React',
    'price': 21
  },
]

const Course = ({ match }) => {

  const cursoActual = cursos.filter( c => c.id === parseInt( match.params.id ))[0]

  return (
    <div className="ed-grid m-grid-3">
      {
        cursoActual
        ? (
          <>
            <h1 className='m-cols-3'>{ cursoActual.title }</h1>
            <img alt={ cursoActual.title } className='m-cols-1' src={ cursoActual.image } />
            <p className='m-cols-2'>{`Curso acerca de ${ cursoActual.title }.`}</p>
          </>
        )
        : (
          <h1 className='m-cols-3'>No existe el curso.</h1>
        )
      }
    </div>
  )

}

export default Course