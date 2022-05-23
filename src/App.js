import './App.css';
import Home from './Pages/home'
import { Icon } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Home />
      <Icon loading name='spinner' />
    <Icon loading name='certificate' />
    <Icon loading name='asterisk' />
    </div>
  );
}

export default App;
