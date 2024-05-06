import { useState } from 'react';
import { Task } from './Task';
import './App.css';
import './css/bulma.min.css';


// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask (event.target.value);
  };
  const addTask = (event) => {
    if (event.key === "Enter") {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
        status: "",
      }
      setTodoList([...todoList,task]);
      document.querySelector('#todo-input').value="";
    }
  };
  const deleteTask = (id) =>{
    setTodoList(todoList.filter((task)=> task.id !== id));
  };
  const completeTask = (id) =>{

    setTodoList(todoList.map((task) => {
      // task.id === id ? task.status="is-done" :"";
      if (task.id === id){
        return{...task, status: task.status==="" ? "is-done" : ""}
      }else{
        return task;
      }
      })
    )
  };

  const resetList = () =>{
    setTodoList ([]);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="columns">
          <div className="column"></div>
          <div className="column">
              <nav className="panel">
                <p className="panel-heading">TO DO</p>
                <div className="panel-block">
                  <p className="control has-icons-left">
                    <input id="todo-input" className="input" type="text" placeholder="Add a task" onChange={handleChange} onKeyDown={addTask}/>
                    <span className="icon is-left">
                      <i className="fas fa-search" aria-hidden="true"></i>
                    </span>
                  </p>
                </div>
                {todoList.map((task)=>{
                  return <Task id={task.id} taskName={task.taskName} status={task.status} deleteTask={deleteTask} completeTask={completeTask} FontAwesomeIcon={FontAwesomeIcon}/>
                })}
                
                
                <div className="panel-block reset">
                  <button className="button is-link is-outlined is-fullwidth"onClick={resetList}>
                    Reset list
                  </button>
                </div>
              </nav>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
library.add(fas, far)
