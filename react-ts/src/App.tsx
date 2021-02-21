import { Component } from 'react';
import './App.css';
import Comp from './Comp';
import State from './State';
import Home from './pages/Home'
import logo from './static/logo192.png'

class App extends Component<any, any>{
  render() {
    return (
      <>
        React ts
        <Comp name='ttt' user={{ age: 12 }} />
        <State />
        <Home />
        <img src={logo} alt={'logo'} />
      </>
    )
  }
}


export default App;
