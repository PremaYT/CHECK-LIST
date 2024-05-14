import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiCalendarTodoFill } from "react-icons/ri";

import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import axios from "axios";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    axios({
      method: process.env.REACT_APP_FETCH_METHOD,
      url: process.env.REACT_APP_USERS_API_ENDPOINT,
    }).then((res) => {
      setUser(res?.data?.name);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="tasks-container">
        {user && <h2 className="mt-4 text-secondary">{user}</h2>}
        <h1 className="mt-3 mb-4" style={{ color: "#004d4d" }}>
          My Check List <RiCalendarTodoFill />
        </h1>
        <AddTask />
        <TasksList />
      </div>
    </div>
  );
}

export default App;
