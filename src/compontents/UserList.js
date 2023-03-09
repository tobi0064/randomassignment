function UserList(props) {
  return (
    <div>
      <ul>
        {props.users.map((UserList) => (
          <li>{`${UserList.name} (${UserList.age} years old)`}</li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;
