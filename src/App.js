import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [["mac", 150, "image"], ["pc", 50, "image"], ["smartphone", 90, "image"]]
    }
  }

  render() {
    return (
      <div className="App">
      
        <Dashboard inventory={this.state.inventory}/>
        <Header />
        <Form />
      </div>
    )
  }
}

export default App;
