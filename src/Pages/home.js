import React, { Component } from 'react'
import Banner from '../Components/Banner/Banner'
import NavBar from '../Components/NavBar/NavBar'
import History from '../Components/history/history'

export class home extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <History/>
          <Banner />
      </div>
    )
  }
}

export default home