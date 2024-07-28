import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTask from "../modals/CreateTask";
import Card from "./card";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let tasks = JSON.parse(arr);
      setTaskList(tasks);
    }
  }, []);

  const updateListArray = (obj, index)=> {
    let templist = taskList
    templist[index] = obj
    localStorage.setItem("taskList", JSON.stringify(templist))
    setTaskList(templist)
    window.location.reload()
  }

  const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };
  return (
    <>
      <div className="header text-center">
        <h1>To-do List</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setModal(true)}
        >
          Create Task
        </button>
      </div>
      <div className="task-container">
        {taskList.map((obj, index) => (
          <Card taskObj={obj} index={index} key={index} deleteTask={deleteTask} updateListArray={updateListArray}/>
        ))}
        <CreateTask modal={modal} toggle={toggle} save={saveTask} />
      </div>
    </>
  );
};

export default TodoList;
