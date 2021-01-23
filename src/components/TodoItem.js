import React from "react";
import { useDispatch } from 'react-redux';
import { changeStatus } from '../actions/TodoActions'

function TodoItem(props) {
    const divStyle = {
        marginLeft: 'auto',
        marginRight: '10px',
    };
    const disPatch = useDispatch();
    return (
        <>
            <li onClick={() => {disPatch(changeStatus(props.item.id, !props.item.mark)) }}>
                {props.item.text}
                {props.item.mark ? <span id='todocheck' style={divStyle}> checked!</span> : <></>}
            </li>
        </>
    )
}

export default TodoItem;