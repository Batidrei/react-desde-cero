import React from 'react'

const Curso = () => (
  <article class="card">
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2020-04/Untitled.png" alt="" />
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 class="t5 s-mb-2 s-center">
      Programación orientada a objetos con Go
      </h3>
      <div class="s-mb-2 s-main-center">
      <div class="card__teacher s-cross-center">
          <div class="card__avatar s-mr-1">
          <div class="circle img-container">
              <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/952327c3-2bd9-41d1-819e-9b5d7eb84c13.jpg" alt="" />
          </div>
          </div>
          <span class="small">Alexys Lozada</span>
      </div>
      </div>
      <div class="s-main-center">
      <a class="button--ghost-alert button--tiny" href="https://ux.ed.team/cards.html">$ 20USD</a>
      </div>
    </div>
  </article>
)

export default Curso