import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import "./NavBar.css"
import logo from './logo.png'

// export class NavBar extends Component {
//     state = {}

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
//       <Menu stackable style={{margin:"0 0"}}>
//         <Menu.Item>
//           <img alt="logo" src='/logo.png' />
//         </Menu.Item>

//         <Menu.Item
//           name='features'
//           active={activeItem === 'features'}
//           onClick={this.handleItemClick}
//         >
//           Features
//         </Menu.Item>

//         <Menu.Item
//           name='testimonials'
//           active={activeItem === 'testimonials'}
//           onClick={this.handleItemClick}
//         >
//           Testimonials
//         </Menu.Item>

//         <Menu.Item
//           name='sign-in'
//           active={activeItem === 'sign-in'}
//           onClick={this.handleItemClick}
//         >
//           Sign-in
//         </Menu.Item>
//       </Menu>
//     )
//   }
// }

// export default NavBar


function Navbar() {
  return (
      <div className="nav">
          <div className ="nav-logo" >
              <img src={logo} alt="logo" /> 
          </div>

          <div className = "nav-items"> 
              <div > <a href="#">Home</a> </div>
              <div> <a href = "#">About Us</a></div>
              <div><a href = "#"> FAQ's</a></div>
              <div> <a href = "#">Contact Us</a></div>
              <div><a href = "#" >Login</a></div>

          </div>

      </div>
  );
}

export default Navbar;