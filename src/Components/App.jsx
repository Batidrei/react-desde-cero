import React from 'react';
import '../scss/main.scss'
import Home from './Pages/Home'
import Formulario from './Pages/Form'
import Courses from './Pages/Courses'
import Course from './Pages/Course'
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History'
import Users from './Pages/Users'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <MainMenu></MainMenu>
    <Switch>
      <Route path='/' exact component={ Home } />
      <Route path='/cursos/:id' exact component={ Course } />
      <Route path='/cursos' exact component={ Courses } />
      <Route path='/historial' exact component={ History } />
      <Route path='/formulario' exact component={ () => <Formulario name='Página de contacto' /> } />
      <Route path='/usuarios' exact component={ Users } />
      <Route component={ () => (
        <div className='ed-grid'>
          <h1>Error 404</h1>
          <span>Página no encontrada</span>
        </div>
      )}
      />
    </Switch>
  </Router>
)

export default App;
