import { useState } from "react";

const CategoryWiseToDo = () =>{
    const [student,setStudent] = useState("");
    const [category,setCategory] = useState("");
    const [savedData, setSavedData] = useState([]);
    
    const handleSubmit =()=>{
        const newData = {
             student
            ,category,
            time:new Date().toLocaleTimeString()
        };
        setSavedData([...savedData,newData]);
       
        setStudent('')
        setCategory('')
    }

    return(
        <>
            <input type="text"
                placeholder="Enter name"
                onChange={(e)=>setStudent(e.target.value)}
                value={student}
            />
            <select onChange={(e)=>setCategory(e.target.value)}
            value={category}>
                <option value="">Choose Category</option>
                <option value="Excellent">Excellent</option>
                <option value="Best">Best</option>
                <option value="Good">Good</option>
                <option value="Bad">Bad</option>
            </select>
            <button onClick={handleSubmit}>
                Submit
            </button>
            {/* <ul>
            <h2>Display Saved Data</h2>
            {savedData.map((item,index)=>(
                <li key={index}>
                    {item.student} {item.category} {item.time}
                </li>
            ))}
            </ul> */}
            
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                <div style={{display:"flex", flexDirection:"column"}}>A
                    {savedData.filter(item=>item.category==="Excellent").map((item,index)=>(
                        <li key={index}>
                            {item.student} - {item.category}

                        </li>
                    ))}
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    B
                    {savedData.filter(item=>item.category==="Best").map((item,index)=>(
                        <li key={index}>
                                {item.student} - {item.category}
                        </li>
                    ))}
                </div>
                <div>C</div>
                <div>D</div>
            </div>

        </>
    )

}

export default CategoryWiseToDo;