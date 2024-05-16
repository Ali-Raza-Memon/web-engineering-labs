import React, { useState, useEffect } from "react";

const UserDetailsCard = ({ user }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <h3>{user.name}</h3>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      {showMore && (
        <>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
        </>
      )}
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Less" : "More"}
      </button>
    </div>
  );
};

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.map(user => (
        <UserDetailsCard user={user} />
      ))}
    </div>
  );
};

export default UserList;
