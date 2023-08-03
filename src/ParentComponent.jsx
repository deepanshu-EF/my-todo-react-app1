import {useState, useReducer } from 'react';
import dataJson from './data.json';

import ListRendering from './ListRendering';
import AddTasks from './AddTasks';


function todoReducer(state, action) {
  console.log('state and action', state, action)
  switch (action.type) {

    case "ADD_TASK":
      if (action.value === '') {
        alert('Fill the input box to add a task');
        return state;
      } else {
        const newObj = {
          id: Math.floor(Math.random() * 1000 + 1),
          taskName: action.value,
          isTaskDone: false
        };
        return [...state, newObj];
      }

    case "DELETE_TASK":
      return state.filter(task => task.id !== action.id);

    case "UPDATE_TASK":
      return state.map(task => {
        if (task.id === action.id) {
          return { ...task, taskName: action.value };
        }
        return task;
      });

    case "TASK_DONE":
      return state.map(task => {
        if (task.id === action.id) {
          return { ...task, isTaskDone: !task.isTaskDone };
        }
        return task;
      });

    default:
      return state;
  }
}


const ParentComponent = function() {
    const userData = dataJson;

    // cannot use the set method of the useState hook via props, instead `useReducer()`
    const [todos, setTodos] = useState(userData);
    // so
    const [state, dispatch] = useReducer(todoReducer, userData);
    const addTaskHandler = (value) => {
        dispatch({ type: "ADD_TASK", value: value })
    }

    properties = {};
    return (
    <>
        properties = {state}
        properties.addTask = addTaskHandler
        <AddTasks todoss={properties} />
        <ListRendering />
    </>
    )
};


export default ParentComponent;
