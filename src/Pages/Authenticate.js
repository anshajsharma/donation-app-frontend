import React, { Component } from 'react'
import Org from '../Components/Auth/Org'
import People from '../Components/Auth/People'



export default class Authenticate extends Component {

  render() {
      const {flag} = this.props;
    
    switch(flag) {
        case 1:
            return <Org/>
        case 2:
            return <People />
    }
  }
}
