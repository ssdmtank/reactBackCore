import { Component } from 'react';
import './App.css';
import Comp from './Comp';
import State from './State'

class App extends Component<any, any>{
  render() {
    return (
      <>
        React ts
        <Comp name='ttt' user={{ age: 12 }} />
        <State />
      </>
    )
  }
}


export default App;
