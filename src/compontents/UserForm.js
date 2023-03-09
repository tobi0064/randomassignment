import React, { useState } from "react";
import UserList from "./UserList";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const nameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      id: Math.random(),
      name: userName,
      age: userAge,
    };
    props.onAddUser(userData);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input onChange={nameChangeHandler} value={userName}></input>
        </div>
        <div>
          <label>Age (Years) </label>
          <input onChange={ageChangeHandler} value={userAge}></input>
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
