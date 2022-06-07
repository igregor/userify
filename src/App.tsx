import './App.css';
import MyAppBar from './components/MyAppBar';
import UserList from './components/UserList';
import AddingSpace from './components/AddingSpace';
import { useState } from 'react';

function App() {
  const [showAdding, setShowAdding] = useState(false);
  return (
    <div className="App">
      <MyAppBar/>
      <UserList setShowAdding={setShowAdding}/>
      {showAdding && <AddingSpace setShowAdding={setShowAdding}/>}

    </div>
  );
}

export default App;
