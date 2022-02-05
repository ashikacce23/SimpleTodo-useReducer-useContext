


import React,{useState, useContext} from 'react';
import "./TodoForm.css"
import { ADD_TODO } from './../context/action.types';
import TodoContext from '../context/TodoContext';
import {v4} from "uuid" //This is for unic id generator

const TodoForm = () => {
    const [change, setChange] = useState("")
    
    // Ei dispatch er maddhome amra action complete korbo.
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(change === ""){
            return alert("Enter some todo")
        }
        //design todo,what we will send.
        // we will send input value. (- change)
        const todo = {
            change,
            id: v4()
        }
        //now ei todo er action ta bole debo
        dispatch ({
            type: ADD_TODO,
            payload:todo
        })
        //now specify the set change
        setChange("")
    }

    return (
        <div className='form_section'>
            <form onSubmit={handleSubmit}>
                <div className="input_group">
                    <input 
                    type="text"
                    name='todo'
                    id='todo'
                    value={change}
                    onChange={(e)=> setChange(e.target.value)}
                     />
                    <button>Add</button>
                </div>
            </form>
        </div>
    );
};
//agter finishing this it does not gonna work. we have to create todo list
export default TodoForm;










