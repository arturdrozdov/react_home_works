import React from 'react';
import './App.css';
import Users from './containers/UsersContainer';
import NewPlayer from './containers/RegContainer';

function App() {
  return (
    <div className="App">
    <Users/>
    <div className='regContainer'>
      <NewPlayer/>
    </div>
    </div>
  );
}

export default App;
