import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      date: new Date()
    }

    // Genera enlace para el funcionamiento correcto del this.
    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeDate = this.changeDate.bind(this)
  }

  changeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  changeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  changeDate() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div className='ed-grid'>
        <h1>Form { this.props.name }</h1>
        <span>Fecha actual: { Math.ceil( this.state.date / 1000 ) }</span>
        <form id='form-element'>
          <div className='ed-grid m-grid-2'>
            <div className="form__item">
              <label>Nombre completo</label>
              <input
                onChange={ this.cambiarNombre }
                type="text"
                />
            </div>
            <div className="form__item">
              <label>Correo electrónico</label>
              <input
                onChange={ this.changeEmail }
                type="email"
              />
            </div>
          </div>
        </form>
        <div>
          <h2>{ `Hola ${ this.state.name }` }</h2>
          <span>{ `Tu correo es: ${ this.state.email }` }</span>
        </div>
      </div>
    )
  }

  componentDidMount() {
    let element = document.getElementById('form-element')
    console.log(element);

    this.intervaloFecha = setInterval(() => {
      this.changeDate()
    }, 1000);
  }

  componentDidUpdate(prevPros, prevState) {
    console.log(prevState);
  }

  componentWillMount() {
    clearInterval(this.intervaloFecha)
  }
}

export default Form