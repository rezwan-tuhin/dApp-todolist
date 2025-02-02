import React, { useEffect, useState } from "react";
import { addTask, loadTasks } from "../todocontract";
import './Todo.css'

function Todo() {

    const [newTask, setNewTask] = useState("");
    const [task, setTask] = useState([]);

    const handleChange = (event) => {
        // setNewTask([...newTask, event.target.value]);
        setNewTask(event.target.value);
    }

    const handleAddTask = async () => {
        if(newTask) {
            await addTask(newTask);
            setNewTask("");
        }
    }

    const fetchTask = async () => {
        try {
          const taskFromContract = await loadTasks();
          setTask(taskFromContract);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };
      

    useEffect( () => {
        fetchTask();
    },[])

    return (
        <>
            <div className="container">
                <div className="heading">
                    <h1>Simple Todo List</h1>
                </div>

                <div className="addtodo">
                    <input type="text" placeholder="New Task" value={newTask} onChange={handleChange} />
                    <button onClick={handleAddTask}>Add</button>
                </div>

                <div className="taslist">
                    <ul>
                        <li className="toprow">
                            <span>#</span>
                            <span>Task</span>
                            <span>Status</span>
                            <span>Delete</span>
                        </li>
                            {
                            
                            task.map( task => (
                                <li key= {task.id}>
                                <span>{task.id}</span>
                                <span>{task.description}</span>
                                <span>{task.status}</span>
                                <button>Delete</button>
                            </li>
                            ))}
                    </ul>
                </div>

                <div className="footer">
                    <p>Created by <strong>Rezwan Ahammed Tuhin</strong></p>
                </div>
            </div>
        </>
    )
}
export default Todo;