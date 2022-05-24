import React from "react";
import Todo from "../../models/todo";
import TodoItem from "../Todo/Todo.component";

import './Todos.css';

type TodosProps = {
    items: Todo[];
    children?: React.ReactNode;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos: React.FC<TodosProps> = ({items, children, setTodos}) =>{
    return(
        <div>
            <ul>
                {items.map((item)=>{
                return (
                    <TodoItem key={item.id} item={item} setTodos={setTodos} items={items}/>
                )
                })}
            </ul>
        </div>
    )

}

export default Todos;