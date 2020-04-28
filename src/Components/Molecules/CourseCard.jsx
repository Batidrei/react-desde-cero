import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CourseCard = ({id, title, image, price}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={ `/cursos/${id}` }>
        <img alt={ title } src={ image } />
      </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">{ title }</h3>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://ux.ed.team/cards.html">{ `$ ${price} USD` }</a>
      </div>
    </div>
  </article>
)

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number
}

CourseCard.defaultProps = {
  title: 'No sé encontró título',
  image: 'https://doofindermedia.s3.amazonaws.com/blog/2019/08/29/110655-404-not-found-Doofinder.jpg',
  price: '-'
}

export default CourseCard