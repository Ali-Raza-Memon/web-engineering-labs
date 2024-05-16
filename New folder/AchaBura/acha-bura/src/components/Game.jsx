import React, { useState, useEffect } from "react";
import "../App.css";

const  Game = ()=> {
  const [users, setUsers] = useState([]);

  const createUser = () => {
    setUsers([...users, { activeStep: 0 }]);
  };

  const nextStep = (userIndex) => {
    const updatedUsers = [...users];
    const activeStep = updatedUsers[userIndex].activeStep + 1;
    updatedUsers[userIndex].activeStep = activeStep;
    setUsers(updatedUsers);
  };

  const prevStep = (userIndex) => {
    const updatedUsers = [...users];
    const activeStep = updatedUsers[userIndex].activeStep - 1;
    updatedUsers[userIndex].activeStep = activeStep;
    setUsers(updatedUsers);
  };

  
  const checkWinCondition = () => {
    const isAnyUserAtStep4 = users.some((user) => user.activeStep === 4);
    if (isAnyUserAtStep4) {
      alert("You Won");
    }
  };

 
  useEffect(() => {
    checkWinCondition();
  }, [users]);

  return (
    <div className="App">
      <h1>Click the button to create multiple users</h1>
     
      <button onClick={createUser}>Create User</button>
      {users.map((user, userIndex) => (
        <div key={userIndex} className="user">
          <p>User {userIndex + 1}</p>
          <div className="steps">
        
            <button
              className="btn"
              onClick={() => prevStep(userIndex)}
              disabled={user.activeStep === 0}
            >
              Back
            </button>
          
            {[...Array(5)].map((_, stepIndex) => (
              <div
                key={stepIndex}
                className={`step ${user.activeStep === stepIndex ? "active" : ""}`}
                onClick={() => {
                  const updatedUsers = [...users];
                  updatedUsers[userIndex].activeStep = stepIndex;
                  setUsers(updatedUsers);
                }}
              >
                Step {stepIndex + 1}
              </div>
            ))}
        
            <button
              className="btn"
              onClick={() => nextStep(userIndex)}
              disabled={user.activeStep === 4}
            >
              Next
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Game;
