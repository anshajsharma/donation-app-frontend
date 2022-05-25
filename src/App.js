import React from 'react';
import './App.css';
import Home from './Pages/home'
import { Icon } from 'semantic-ui-react'
import  Authenticate  from './Pages/Authenticate'

function App() {

  const [flag,setFlag] = React.useState(2);

  return (
    <div className="App">
      <Home />
      {/* <Icon loading name='spinner' />
    <Icon loading name='certificate' />
    <Icon loading name='asterisk' /> */}
    <Authenticate flag={flag}/>
    </div>
  );
}

export default App;
