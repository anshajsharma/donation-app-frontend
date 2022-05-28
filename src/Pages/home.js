import React, { Component } from 'react'
import Banner from '../Components/Banner/Banner'
import NavBar from '../Components/NavBar/NavBar'
import Aboutus from '../Components/Aboutus/Aboutus'

export class home extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <Banner />
          <Aboutus/>
      </div>
    )
  }
}

export default home