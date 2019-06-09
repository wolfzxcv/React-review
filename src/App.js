import React from 'react';
import './App.css';
import Parent from './components/Parent'
import Name from './components/Name'
import Form from './components/Form'

const App = () => {
  return (
    <div className="App">
      <Parent />
      <Name />
      <Form />
    </div>
  );
}

export default App;
