import React from 'react'

const Head = () => {
    return (
        <>
            <div className="heading">
                <h1 className="title">To-Do List</h1>
            </div>
            <input
                type="text"
                value={input}
                onChange={(event) => { setInput(event.target.value) }}
            />
            <button onClick={addItem}>Add</button>
        </>
    );
}

export default Head;