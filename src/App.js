
import React,{useReducer} from 'react';
import "./App.css"
import TodoContext from "./context/TodoContext";
import TodoReducer from "./context/reducer"
//
import TodoForm from './component/TodoForm';
import Todos from './component/Todos';

const App = () => {
    const [todos,dispatch] = useReducer(TodoReducer, []);
                         //useReducer take initisal value []
    return (
        <TodoContext.Provider value={{todos, dispatch}}>
            <div className="App">
                <h1>useReducer Hooks & Context API</h1>
                <div className="todo_form">
                      <TodoForm />
                </div>
                  <div className="todos">
                    <Todos />
                </div>
            </div>
        </TodoContext.Provider>
    );
};

export default App;







// import React,{useReducer} from "react"
// import './App.css';

// //import essential things
// import TodoContext from './context/TodoContext';
// import TodoReducer from "./context/reducer";

// import TodoForm from "./component/TodoForm";
// import Todos from "./component/Todos";

// function App() {
//   //store all the todos
//   const [todos, dispatch] = useReducer(TodoReducer, []);
//   return (
//     <TodoContext.Provider value={{todos, dispatch}}>
//      <div className="App">
//         <h1>Todo Context API</h1>
//         <div className="todos">
//           <Todos />
//         </div>
//         <div className="todo_form">
//           <TodoForm />
//         </div>
//      </div>
//     </TodoContext.Provider>
//   );
// }

// export default App;
