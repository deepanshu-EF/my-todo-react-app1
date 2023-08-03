import { useState } from 'react';
// import dataJson from './data.json';

// const AddTasks({ addTaskTitle }) = function {
 function AddTasks(props) {
    const {addTaskHandler} = props;
//     const [todo, setTodo] = useState(dataJson)
    const [value, setValue] = useState('');
    console.log(props)

    const handleAddTask = () => {
        addTaskHandler(value)
    }

    const handleChange = (event) => {
        console.log(`${event.target.value}`)
        setValue(event.target.value);
    }


    return (
        <div className={`addTaskDiv`}>
            <input type='text' placeholder='Task type kro here...' value={value} onChange={handleChange} />
            <button className={`btn-style`} onClick={handleAddTask}>Add</button>
        </div>
    );
}

export default AddTasks;
