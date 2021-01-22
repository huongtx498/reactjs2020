import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function Body() {
    const todolist = useSelector(state => state.todos);
    return (
        <div className="items">
            <ul>
                {todolist.map((item) => (
                    <TodoItem item={item} />
                ))}
            </ul>
        </div>
    );
}

export default Body;