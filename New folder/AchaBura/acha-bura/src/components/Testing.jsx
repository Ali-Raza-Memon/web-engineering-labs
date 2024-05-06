import { useState } from "react"

const Testing = () =>{

    const [name,setName] = useState("");
    const [category,setCategory] = useState("");
    const [savedData, setSavedData] = useState([]);

    const handleNameChange2 = (e)=>{
        setName(e.target.value);
    }
    const handleCategoryChange2 = (e) =>{
        setCategory(e.target.value);
    }
    
    const handleSaved = () =>{
        const newData = { name,category };
        setSavedData([...savedData,newData]);
        setName("");
        setCategory("");

    };



    return(
        <>
            <input 
                placeholder="Write name"
                type="text"
                onChange={handleNameChange2}
            />
            <select onChange={handleCategoryChange2}>
                <option value="">Choose Friends Value</option>
                <option value="acha">Acha</option>
                <option value="bura">Bura</option>
            </select>
            <button onClick={handleSaved}>
                Save
            </button>
            <h2>Display the Saved Data</h2>

            {savedData.map((item, index) => (
                        <li key={index}>
                            Name: {item.name}, Category: {item.category}
                        </li>
                    ))}


        </>
    )

}
export default Testing;