import React from "react";
import { useState } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const TodoList = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState([]);

  const addTaskHandler = () => {
    const tempTask = [...taskList];

    tempTask.push({
      id: taskList.length,
      task: task,
      isDone: false,

    });
    setTaskList(tempTask);
  };

  const deleteTaskHandler = (id) => {
    const indexToBeDeleted = taskList.findIndex((element) => element.id === id)
    if (indexToBeDeleted >= 0) {
      let temp = [...taskList];

      temp.splice(indexToBeDeleted, 1);

      setTaskList(temp);
    } else {
      console.warn("Cannot remove item.");
    }
  };

  const taskDoneHandler = (id) => {
    const indexOfTaskDone = taskList.findIndex((element) => element.id === id)
    let temp = [...taskList];
    temp[indexOfTaskDone].isDone = !temp[indexOfTaskDone].isDone;
    setTaskList(temp);
  }

  return (
    <div className="w-full text-center p-3 ">
      <h2 className="w-5/6 text-center mx-auto bg-green-200 py-3 text-[#2d8a85] font-medium text-lg mb-5  ">
        Todo List
      </h2>
      <div className="w-5/6 h-96 bg-white mx-auto overflow-y-scroll p-5 scrollbar-hide">
        {taskList?.map((element, index) => {
          return (
            <div key={index} className="flex items-center justify-between p-2">
              <span className="inline-flex items-center">
                <input onClick={() => taskDoneHandler(element.id)} type="checkbox" name="" className="mr-3 w-4 h-4" />
                <p className={ `text-gray-700 font-medium ${element.isDone ? "line-through" : " "} ` }>{element.task}</p>
              </span>
              <span onClick={(e) => deleteTaskHandler(element.id)}>
                <DeleteOutlinedIcon color="disabled" />
              </span>
            </div>
          );
        })}
      </div>
      <div className="  mx-auto">
        <input
          onChange={(e) => {
            setTask(e.target.value);
          }}
          type="text"
          name=""
          placeholder="Add new task..."
          className="w-5/6 mb-3 p-2 border border-t-gray-200 placeholder:text-sm focus:outline-none"
        />{" "}
        <br />
        <button
          className="w-3/5 text-center mx-auto bg-green-200 py-3 text-[#2d8a85] font-medium text-lg mb-5 rounded-3xl"
          onClick={addTaskHandler}
        >
          + Add Task
        </button>
      </div>
    </div>
  );
};

export default TodoList;
