import React,{useState} from "react";


function CreateJob({func}){
    const [job, setJob] = useState("");

    const handleTitle = (e)=>{
        let jobTitle = e.target.value;
        setJob(jobTitle)
    }
  
    const createJob = ()=>{
     func(job)
     setJob("")
    }
    return (
        <div>
            <div> <input value={job} onChange={handleTitle} type="text" /></div>
           <div> <button onClick={createJob}>Create a Job</button></div>
          
        </div>
    )
}

export default CreateJob