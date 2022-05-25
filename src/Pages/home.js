import React, { Component } from 'react'
import Banner from '../Components/Banner/Banner'
import NavBar from '../Components/NavBar/NavBar'

export class home extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <Banner />
      </div>
    )
  }
}

export default home