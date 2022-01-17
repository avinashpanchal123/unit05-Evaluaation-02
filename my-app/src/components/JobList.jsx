import React from "react";

const JobList = ({id,status, title, func}) => {

  
  return (
      <>
 
         <div className="item-list">
         <div>{title}</div>
      <button onClick={()=>func(id)}>Delete Job</button>
         </div>
         
    
      </>
  )
};

export default JobList;
