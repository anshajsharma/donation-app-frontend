import React from 'react'
import { Link,Outlet} from "react-router-dom";
import History from '../history/history'


const Org = () => {
  
    return(
      <div>
        <History/>
        <ul>
          <li><Link to="login">login org </Link></li>
          <li><Link to="signup">signup org</Link></li>
        </ul>
        <Outlet/>
      </div>

    )

  }

  export default Org;

