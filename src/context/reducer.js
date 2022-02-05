

const TodoReducer = (state, action) =>{
    switch (action.type) {
       case "ADD_TODO":
            return [...state, action.payload] //must []
        case "REMOVE_TODO":
            return state.filter(todo=> todo.id !==action.payload);   
        default:
            return state
    }
}
export default TodoReducer;

//sometimes here shows error, bt the error is occuring in <App.js /> in console
//Solution:
//The reason is that we did not put initial statte [] in useReducer.










// //ACTION theke amra sob import korbo reducer e


// // work with reducer

//  const TodoReducer =(state, action)=>{
//     switch(action.type){
//         case "ADD_TODO":
//             return [...state, action.payload]
//         case "REMOVE_TODO":
//             return state.filter(todo=>todo.id !== action.payload)  
//         default:
//             return state;    
//     }
// }
// export default TodoReducer;
