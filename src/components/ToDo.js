import React from "react";
import { useState } from "react";
import "./ToDo.css";

const ToDo = () => {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Take a shower",
    "Have a medication",
  ]);
  
  const[newTask,setNewTask]=useState("");

  function handleInputChange(event){
     setNewTask(event.target.value);
     
     
    
  }
  function addTask(){
    if(newTask.trim()!==""){
    setTasks(t=>[...t,newTask])
    setNewTask("");
  }

  }
  function deleteTask(index){
    const updatedTasks =tasks.filter((_,i)=>i!==index);
    setTasks(updatedTasks);


  }
  function moveTaskUp(index){
    if(index>0){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
      setTasks(updatedTasks);
    }

  }
  function moveTaskDown(index){
    if(index<tasks.length-1){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
      setTasks(updatedTasks);
    }

  }
  return (
    <div className="wrapper">
      <h3>To-Do List</h3>
      <input type="text" placeholder="Enter a task...." value={newTask} onChange={handleInputChange}/>
      <button className="btnAdd" onClick={addTask}>Add</button>
      <br />

      <ul>
        {tasks.map((task, index) => (
          <div className="task">
            <li key={index}>
              <span className="text">
              {task}
              </span>
              <button className="delBtn" onClick={()=>deleteTask(index)}>Delete</button>
              <button className="moveBtn" onClick={()=>moveTaskUp(index)}>👆</button>
              <button className="moveBtn" onClick={()=>moveTaskDown(index)}>👇</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
