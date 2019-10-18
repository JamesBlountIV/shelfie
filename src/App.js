import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
     
      <Dashboard />
      <Header />
      <Form />
    </div>
  );
}

export default App;
