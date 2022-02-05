import React,{useContext} from 'react';
import "./Todos.css"
 import {AiFillDelete} from "react-icons/ai"

import TodoContext from '../context/TodoContext';
 import {REMOVE_TODO} from "../context/action.types"

const Todos = () => {
         //Fixed todos
    const {todos, dispatch} = useContext(TodoContext)
    return (
        <div className='todos-sec'>
            {todos.map(todo=>( //Fixed todos.map
                <div key={todo.id} className="item">
                    {todo.change}
                    <span
                     onClick={()=>{
                         dispatch({
                             type:REMOVE_TODO,
                             payload:todo.id
                         })
                     }}
                    >
                        <AiFillDelete />
                    </span>
                </div>
             
            ))}
        </div>
    );
};

export default Todos;
