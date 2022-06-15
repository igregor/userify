import "./App.css";
import MyAppBar from "./components/MyAppBar";
import UserList from "./components/UserList";
import AddingSpace from "./components/AddingSpace";
import { useState } from "react";

export const MaterialContext = React.createContext(undefined);

function App() {
  const [showAdding, setShowAdding] = useState(false);
  return (
    <div className="App">
      <MyAppBar />
      <UserList showAdding={showAdding} setShowAdding={setShowAdding} />
      {showAdding && <AddingSpace setShowAdding={setShowAdding} />}
    </div>
  );
}

export default App;
