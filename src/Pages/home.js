import React, { Component } from 'react'
import Banner from '../Components/Banner/Banner'
import About from '../Components/About/About'
import Overview from '../Components/Overview/Overview'

export class home extends Component {
  render() {
    return (
      <div>
          <Banner />
          <Overview/>
          <About/>
      </div>
    )
  }
}

export default home