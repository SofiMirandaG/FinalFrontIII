import React from "react";
import Card from "../Components/Card";
import { useDoctorState } from '../Context/global.context';

const Favs = () => {
  const{state}= useDoctorState();
  debugger;

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className= {'light-theme list-container'}>
      {state.favs.map((array) => {
          return <Card key={array.id} doctor={array} />
        })}
      </div>
    </>
  );
};

export default Favs;
