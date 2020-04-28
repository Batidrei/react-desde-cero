import React, { Component } from 'react'
import UserCard from '../Molecules/UserCard'
import axios from 'axios'
import UsersGrid from '../Organisms/UsersGrid'

class Users extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  // Uso de Fetch
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users', { method: 'get' })
  //     .then( Response => Response.json())
  //     .then( Response2 => {
  //       this.setState({
  //         users: Response2
  //       })
  //     })
  // }

  // Uso de Axios
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(Response => {
      this.setState({
        users: Response.data
      })
    })
  }

  render() {
    const { users } = this.state
    return <UsersGrid users={ users } />
  }
}

export default Users