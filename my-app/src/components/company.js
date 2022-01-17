import React,{useState} from "react";

import GroceryInput from "./CreateJob";

import GroceryList from "./JobList"

import {nanoid} from "nanoid"
import CreateJob from "./CreateJob";
import JobList from "./JobList";


const Grocery = ()=>{
    const [list, setList] = useState([])
    function dataTransfer(name){
        let payload = {
            title : name,
            status:false,
            id : nanoid(7)
        }
        let newList = [...list, payload]
        console.log(list);
        setList(newList)
    }

    const deleteItem = (data)=>{
     
       
        const newList = list.filter((item) => item.id !== data);
        console.log(newList);
        setList(newList)
    }
   return (
       <div>
           <CreateJob func = {dataTransfer}/>
           {/* <div>{list[list.length-1]}</div> */}
           {list.map((item)=>(
              
            <JobList key={item.id} status = {item.status} id = {item.id} title={item.title}  func = {deleteItem}/>
           ))}
       </div>
   )
}

export default Grocery