import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    FILTER_TODOS,
    MARK_ALL_COMPLETED,
    UPDATE_SEARCH_ITEM,
  } from './actionTypes';
const arr=localStorage.getItem("td")?JSON.parse(localStorage.getItem('td')):[];
const initialstate={
    todos:arr?arr:[],
    filter:"ALL",
    searchItem:"",
}

const todoReducer=(state=initialstate,action)=>{
    switch(action.type){
          case ADD_TODO:
            // console.log("test")
            return{
                todos:[...state.todos,{text:action.payload.text,completed:false}],
                
                filter:state.filter,
                searchItem:state.searchItem,
            }
            
                case TOGGLE_TODO:
                    return {
                      todos: state.todos.map((todo, index) =>
                        index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                      ),
                      filter: state.filter,
                      searchItem: state.searchItem,
                    };
              
                  case REMOVE_TODO:
                    return {
                      todos: state.todos.filter((todo, index) => index !== action.payload.id),
                      filter: state.filter,
                      searchItem: state.searchItem,
                    };
              
                  case MARK_COMPLETED:
                    return {
                      todos: state.todos.map((todo, index) =>
                        index === action.payload.id ? { ...todo, completed: true } : todo
                      ),
                      filter: state.filter,
                      searchItem: state.searchItem,
                    };
              
                  case MARK_INCOMPLETE:
                    return {
                      todos: state.todos.map((todo, index) =>
                        index === action.payload.id ? { ...todo, completed: false } : todo
                      ),
                      filter: state.filter,
                      searchItem: state.searchItem,
                    };
              
                  case FILTER_TODOS:
                    return {
                      todos: state.todos,
                      filter: action.payload.filter,
                      searchItem: state.searchItem,
                    };
              
                  case UPDATE_SEARCH_ITEM:
                    return {
                      todos: state.todos,
                      filter: state.filter,
                      searchItem: action.payload.searchItem,
                    };
              
                  case MARK_ALL_COMPLETED:
                    return {
                      todos: state.todos.map((todo) => ({ ...todo, completed: true })),
                      filter: state.filter,
                      searchItem: state.searchItem,
                    };
              
                  default:
                    return state;
    }
   
}
export default todoReducer
