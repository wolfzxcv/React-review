import React from 'react';
import './App.css';
import Parent from './components/Parent'
import Name from './components/Name'
import Form from './components/Form'
import Count from './components/Count'
import {UserProvider} from './components/Layer/UserContext'

const App = () => {
  return (
    <div className="App">
      <UserProvider value='Norge'>
      <Parent />
      </UserProvider>

      <Name />
      <Form />
      <br/>
      <Count />
    </div>
  );
}

export default App;
