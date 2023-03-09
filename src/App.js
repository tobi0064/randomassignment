import React, { useState } from "react";
import UserList from "./compontents/UserList";
import UserForm from "./compontents/UserForm";

import "./App.css";

const dummyUsers = [
  {
    id: "1",
    name: "Tobias",
    age: "30 years old",
  },
  {
    id: "2",
    name: "Christina",
    age: "29 years old",
  },
];

function App() {
  const [userList, setUserList] = useState(dummyUsers);
  const addUserHandler = (userList) => {
    setUserList((prevUserList) => {
      return [userList, ...prevUserList];
    });
  };

  return (
    <div className="App">
      <UserForm onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
