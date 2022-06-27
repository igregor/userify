import "./App.css";
import MyAppBar from "./components/MyAppBar";
import UserList from "./components/UserList";
import AddingSpace from "./components/AddingSpace";
import { useState } from "react";

function App() {
  const [showAdding, setShowAdding] = useState(false);
  const [users, setUsers] = useState([]);
  const userPropertiesList = users.map((user) => <li key={user}>{user}</li>);
  return (
    <div className="App">
      <MyAppBar />

      <UserList
        showAdding={showAdding}
        setShowAdding={setShowAdding}
        userPropertiesList={userPropertiesList}
      />
      {showAdding && (
        <AddingSpace setShowAdding={setShowAdding} setUsers={setUsers} />
      )}
    </div>
  );
}

export default App;
