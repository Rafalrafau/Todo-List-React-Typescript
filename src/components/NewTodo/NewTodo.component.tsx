import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import Todo from "../../models/todo";

type NewTodoProprsType = {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    todos: Todo[];
}

const NewTodo: React.FC<NewTodoProprsType> = ({setTodos, todos}) =>{

    const [inputVal, setInputVal] = useState<string>('');
    // const todoTextInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log('event triggered');
        // const enteredText = todoTextInputRef.current?.value;
        // console.log(enteredText);
        setTodos([...todos, new Todo(inputVal)]);
        setInputVal('');
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        setInputVal(event.target.value);
        console.log(inputVal);
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <div className='label-container'>
                <label htmlFor="textInput">Shopping List</label>
            </div>
            <div className='input-container'>
                <input 
                className="input"
                type="text" 
                id='textInput' 
                value={inputVal} 
                onChange={handleChange}/>
                <button>Add</button>
            </div>
        </form>
    )
}

export default NewTodo;