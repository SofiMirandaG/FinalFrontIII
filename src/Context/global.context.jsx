import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios';
import { reducer } from "../reducers/reducer";

const DoctorState = createContext();

const lsfavs = JSON.parse(localStorage.getItem("favs")) || []; 
const initialState = {
  cart: [],
  doctors: [],
  favs: []
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = `https://jsonplaceholder.typicode.com/users`;

  useEffect(()=>{
    axios(url)
    .then((res) =>
    {
      console.log(res.data);
      dispatch({type: "GET_DOCTORS", payload: res.data});
    });
  },[]);

  useEffect(()=> {
    localStorage.setItem("favs",JSON.stringify(state.favs))
  },[state.favs]);


  return (
    <DoctorState.Provider value={{state, dispatch}}>
      {children}
    </DoctorState.Provider>
  );
};

export default Context;
export const useDoctorState = ()=> useContext(DoctorState);