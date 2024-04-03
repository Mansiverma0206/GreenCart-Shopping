import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";

const store = configureStore({
   reducer : {
       carts : CartReducer
   }
})
store.subscribe(state=>{
   localStorage.setItem('myData',JSON.stringify(store.getState()))
})

export default store ;
