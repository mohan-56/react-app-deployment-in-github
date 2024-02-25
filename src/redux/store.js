import {legacy_createStore as createStore, legacy_createStore} from 'redux'
import todoReducer from "./reducers.js"
const store=legacy_createStore(todoReducer);
export default store

