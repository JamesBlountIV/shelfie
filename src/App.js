import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      selectedProduct: ""
    }
  }

  getInventory = () => {
    axios.get("/api/inventory")
    .then(response => {
      console.log(response.data);
      this.setState({inventory: response.data});
      console.log(response);
    }).catch(err => {
        console.log(err);
      });
  }
  componentDidMount() {
    this.getInventory();
  }



  render() {
    return (
      <div className="App">
      
        <Dashboard getInventory={this.getInventory.bind(this)} inventory={this.state.inventory}/>
        <Header />
        <Form getInventory={this.getInventory.bind(this)} selectedProduct={this.state.selectedProduct}/>
      </div>
    )
  }
}

export default App;
