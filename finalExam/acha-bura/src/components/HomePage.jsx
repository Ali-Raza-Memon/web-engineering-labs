import { useState } from "react";
import "../App.css"

const HomePage = () =>{
    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);
    const [counter3,setCounter3] = useState(0);


    return(
        <div className="Navbar home">

            <button className="btns  counterHeader">Add Counter</button>

            <div className="box1">
                <button className="btns" onClick={()=>setCounter1(counter1+1)}>+</button>
                {counter1}
                <button className="btns" onClick={()=>setCounter1(counter1-1)} >-</button>
                <button className="btns">Delete</button>
            </div>

            <div className="box2">
                <button className="btns" onClick={()=>setCounter2(counter2+1)} >+</button>
                {counter2}
                <button className="btns" onClick={()=>setCounter2(counter2-1)}>-</button>
                <button className="btns">Delete</button>
            </div>

            <div className="box3">
                <button className="btns" onClick={()=>setCounter3(counter3+1)}>+</button>
                {counter3}
                <button className="btns" onClick={()=>setCounter3(counter3-1)} >-</button>
                <button className="btns">Delete</button>
            </div>


        </div>
    )
}

export default HomePage;