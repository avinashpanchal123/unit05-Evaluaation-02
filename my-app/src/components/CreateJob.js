import React,{useState} from "react";


function CreateJob({func}){
    const [job, setJob] = useState("");

    const changeHandler = (e)=>{
        let name = e.target.value;
        setJob(name)
    }
    console.log("rendering");
    const addToCart = ()=>{
     func(job)
     setJob("")
    }
    return (
        <div>
            <div> <input value={job} onChange={changeHandler} type="text" /></div>
           <div> <button onClick={addToCart}>Create a Job</button></div>
          
        </div>
    )
}

export default CreateJob