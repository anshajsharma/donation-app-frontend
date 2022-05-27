import React from 'react';
import './App.css';
import Home from './Pages/home'
import {  Routes, Route } from "react-router-dom";
import Org from './Components/Auth/Org'
import People from './Components/Auth/People'
import useform ,{validate} from './Components/function/formhandle'
import Olog from './Components/Login/Olog'
import OSignup from './Components/Signup/OSignup'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'

function App() {

  return (

      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="org" element={<Org/>}>
            <Route path="login" element={<Olog form={useform()} validate={validate}/>} />
            <Route path="signup" element={<OSignup  form={useform()} validate={validate}/>} />
          </Route>
          <Route path="people" element={<People/>}>
            <Route path="login" element={<Login  form={useform()} validate={validate}/>} />
            <Route path="signup" element={<Signup  form={useform()} validate={validate}/>} />
          </Route>
      </Routes>
  );
}

export default App;