import React from 'react'
import Olog from '../Login/Olog'
import OSignup from '../Signup/OSignup'
import useform ,{validate} from '../function/formhandle'

const Org = () => {
  
  const [flag,setFlag] = React.useState(1);

    switch (flag) {
      case 1:
        return <Olog handlechange={setFlag} form={useform()} validate={validate}/>
      case 2: 
         return <OSignup handlechange={setFlag} form={useform()} validate={validate}/>
    }
  }

  export default Org;

