import React, { Component } from 'react'
import Banner from '../Components/Banner/Banner'
import About from '../Components/About/About'
import Overview from '../Components/Overview/Overview'
import Footer from '../Components/Footer/Footer'
export class home extends Component {
  render() {
    return (
      <div>
          <Banner />
          <Overview/>
          <About/>
          <Footer/>
      </div>
    )
  }
}

export default home