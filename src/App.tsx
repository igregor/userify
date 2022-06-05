import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyAppBar from './components/MyAppBar';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <MyAppBar/>
      <UserList/>
    </div>
  );
}

export default App;
