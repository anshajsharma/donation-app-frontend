import React from 'react'
import { Link,Outlet} from "react-router-dom";


const Org = () => {
  
    return(
      <div>
        <ul>
          <li><Link to="login">login org </Link></li>
          <li><Link to="signup">signup org</Link></li>
        </ul>
        <Outlet/>
      </div>

    )

  }

  export default Org;

