import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/TodoActions'

function Head() {
    const [item, setItem] = useState("");
    const disPatch = useDispatch();

    const addItem = () => {
        disPatch(addTodo(item));
        document.getElementById('input-text').value = "";
        setItem("");
    }

    return (
        <>
            <div className="heading">
                <h1 className="title">To-Do List</h1>
            </div>
            <input
                id="input-text"
                type="text"
                placeholder="do something"
                onChange={(event) => { setItem(event.target.value) }}
            />
            <button onClick={addItem}>Add</button>
        </>
    );
}

export default Head;