import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import Todo from "../../models/todo";

type TodoItemProps = {
    item: Todo;
    items: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<TodoItemProps> = ({item, items, setTodos}) =>{
    const [clicked, setClicked] = useState(false);

    const handleClick = () =>{
        const newList = items.filter((Todo)=> Todo !== item);
        setTodos(newList);
    }

    const handleTextClick = ()=>{
        setClicked(!clicked);
    }

    return (
        <li className="item-container">
            <p onClick={handleTextClick} style={clicked?{textDecoration: "line-through"}:undefined}>
                {item.text}</p>
            <span className="remove-button" onClick={handleClick}>&#x2715;</span>
        </li>
    )
}

export default TodoItem;