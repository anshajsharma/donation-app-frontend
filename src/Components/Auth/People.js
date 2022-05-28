import React from 'react'
import { Link,Outlet } from "react-router-dom";
import History from '../history/history'
const People = () => {
  
    return(
      <div>
        <History/>
        <ul>
          <li><Link to="login">login user</Link></li>
          <li><Link to="signup">signup user</Link></li>
        </ul>
        <Outlet/>
      </div>

    )

  }

  export default People;

