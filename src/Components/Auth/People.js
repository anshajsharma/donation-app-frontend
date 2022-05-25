import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import useform ,{validate} from '../function/formhandle'

const People = () => {
  
  const [flag,setFlag] = React.useState(1);

    switch (flag) {
      case 1:
        return <Login handlechange={setFlag} form={useform()} validate={validate}/>
      case 2: 
         return <Signup handlechange={setFlag} form={useform()} validate={validate}/>
    }
  }

  export default People;

