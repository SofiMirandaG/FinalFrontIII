import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios';
import { reducer } from "../reducers/reducer";

const DoctorState = createContext();

const lsfavs = JSON.parse(localStorage.getItem("favs")) || []; 
const thems = localStorage.getItem("them") || false; 

const initialState = {
  cart: [],
  doctors: [],
  favs: lsfavs,
  them:thems
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

  useEffect(()=> {
    const root = document.documentElement;

    if (state.them) {
      root.style.setProperty("--background-color", "#ffffff");
      root.style.setProperty("--text-color", "#000000");
      root.style.setProperty("--menu-bg", "#f0f0f0");
      root.style.setProperty("--button-bg", "#000000");
      root.style.setProperty("--button-text", "#ffffff");
    } else {
      root.style.setProperty("--background-color", "#000000");
      root.style.setProperty("--text-color", "#ffffff");
      root.style.setProperty("--menu-bg", "#333333");
      root.style.setProperty("--button-bg", "#ffffff");
      root.style.setProperty("--button-text", "#000000");
    }
    localStorage.setItem("them",state.them)
  },[state.them]);


  return (
    <DoctorState.Provider value={{state, dispatch}}>
      {children}
    </DoctorState.Provider>
  );
};

export default Context;
export const useDoctorState = ()=> useContext(DoctorState);