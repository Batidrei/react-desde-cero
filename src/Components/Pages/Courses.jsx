import React, { Component } from 'react'
import axios from 'axios'
import CoursesGrid from '../Organisms/CourseGrid'

class Courses extends Component {
  constructor(props) {
    super(props)

    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    axios.get('http://my-json-server.typicode.com/AlexAndrei04/json-db/cursos')
    .then(Response => this.setState({
      courses: Response.data
    }) )
  }

  render() {
    const { courses } = this.state

    return <CoursesGrid courses={courses} />
  }
}

export default Courses
