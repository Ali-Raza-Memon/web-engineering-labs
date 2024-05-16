import React, { useState } from "react";

const ToDo = () => {
    const [todo, setTodo] = useState("");
    const [status, setStatus] = useState("");
    const [savedTodo, setSavedTodo] = useState([]);

    const handleTodoChange = (e) => {
        setTodo(e.target.value);
    };

    const handleStatus = (e) => {
        setStatus(e.target.value);
    };

    const handleSavedToDo = () => {
        const newTodo = { todo, status, time: new Date().toLocaleString() };
        setSavedTodo([...savedTodo, newTodo]);
    };

    return (
        <>
            <input
                onChange={handleTodoChange}
                placeholder="Write the todo"
                type="text"
            />

            <select onChange={handleStatus} value={status}>
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>

            <button onClick={handleSavedToDo}>Save</button>

            <h2>Saved ToDo</h2>
            <ul>
                {savedTodo.map((item, index) => (
                    <li key={index}>
                        Name: {item.todo}, Status: {item.status} , Time: {item.time}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ToDo;
