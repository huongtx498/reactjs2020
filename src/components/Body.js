import React from 'react'

const Body = () => {
    return (
        <div className="items">
            <ul>
                {items.map((item, index) => (
                    <TodoItem
                        key={index}
                        id={index}
                        item={item}
                        onCheck={removeItem}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Body;