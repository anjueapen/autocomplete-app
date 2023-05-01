import React, { useState } from "react";
import Accordion from "./accordion";
const UserList = ({ users }) => {
  const [userData, setUserData] = useState(users);
  const deleteUser = (id) => {
    console.log(id + "to delete");
    let list = users.filter((item) => id !== item.id);
    setUserData(list);
  };
  const handleGo = () => {
    alert("Go");
    return <Accordion />;
  };
  return (
    <div>
      <div>
        <h2>Users List</h2>
        <button onClick={handleGo}>FAQ</button>
      </div>
      <ul>
        {userData?.map((val) => (
          <li className="valList" key={val?.id}>
            <span>{val?.id})</span>
            <span>{val?.title}</span>
            <span>
              <button className="delBtn" onClick={() => deleteUser(val?.id)}>
                {" "}
                delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
