import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RiCalendarTodoFill } from 'react-icons/ri'


import AddTask from './components/AddTask'
import TasksList from './components/TasksList'

function App() {
  return (
    <div className="container-fluid">
        <div className="tasks-container">
          <h1 className="mt-3 mb-4" style={{color:"#004d4d"}}>My Check List <RiCalendarTodoFill /></h1>
          <AddTask />
          <TasksList />
        </div>
        
    </div>
  );
}

export default App;
