import { useState } from "react";

import './TodoList.css'
function TodoList(){
    const [tasks, setTasks] = useState([]);

    const [inputValue, setInputValue] = useState("")

    function addTask(){
        if(inputValue.length === 0){
            return;
        }
        setTasks([
            ...tasks,
            {
                content: inputValue,
                isComplete: false
            }
            
        ]);
        setInputValue("")
    }

    function deleteTask(taskIndex){
        tasks.splice(taskIndex, 1)
        setTasks([
            ...tasks
        ])
        
    }

    

    return <div>
        <h1>To Do List</h1>
        <div>
            <input className="inputbar" value={inputValue} onChange={(event)=> setInputValue(event.target.value)} />
            <button onClick={addTask}>Submit</button>
        </div>
        <ul>
            {
                tasks.map(
                    (task, index)=><li>
                        <input type="checkbox"  /> 
                        {task.content}
                        {' '}
                        <button onClick={()=>deleteTask(index)}>Delete</button>
                    </li>
                )
            }
        </ul>

        
    </div>
  }

export default TodoList;