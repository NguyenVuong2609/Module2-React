import './App.css';
import React, {Component} from 'react';
import Header from './Components/Header'
import ListItems from './Components/ListItems';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header></Header>
        <ListItems></ListItems>
      </div>
    );
  }
}
export default App;
