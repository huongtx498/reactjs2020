import React, { useState } from 'react';
import TodoItem from "../components/TodoItem";
import 'public/css/App.css';
import Head from '../components/Head';
import Body from '../components/Body';

function App() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    function addItem(event) {
        setItems(prevData => {
            return [...prevData, input];
        });

        setInput("");
    }

    function removeItem(id) {
        setItems(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }

    return (
        <div className="todolist">
            <Head />
            <Body />
        </div>
    );
}

export default App;