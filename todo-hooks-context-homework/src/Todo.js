import React, {useContext} from "react";
import {TodoContext} from "./context/context"

function Todo() {
    const {
        todoItem: {id, todo},
    } = useContext(TodoContext)


    return (
        <div>
            {todo} <button>Done</button>
            <button>Delete</button>
        </div>
    )
}

export default Todo;