import React, { useState } from 'react';

const Home = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [savedData, setSavedData] = useState([]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSave = () => {
        
        const newData = { name, category };
        setSavedData([...savedData, newData]);
    
        setName("");
        setCategory("");
    };

    return (
        <>
            <h1>Hello Home</h1>
            <div>
                <input
                    placeholder="Write name here"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />
                <select value={category} onChange={handleCategoryChange}>
                    <option value="">Choose Friend Category</option>
                    <option value="acha">Acha</option>
                    <option value="bura">Bura</option>
                </select>
                <button onClick={handleSave}>
                    Save
                </button>
            </div>
           
            <div>
                <h2>Saved Data</h2>
                <ul>
                    {savedData.map((item, index) => (
                        <li key={index}>
                            Name: {item.name}, Category: {item.category}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Home;
