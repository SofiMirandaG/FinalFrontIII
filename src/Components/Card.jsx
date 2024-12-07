import React from "react";
import {useDoctorState} from "../Context/global.context";
import { Link } from "react-router-dom";
import "../styles/Card.css";
import imagenMedigo from './utils/images/doctor.jpg';

const Card = ({doctor}) => {
  const {dispatch, state} = useDoctorState();
  const findFav = state.favs.find((fav) => fav.id === doctor.id);
  console.log(findFav);
  const toggleFav =()=> {
  dispatch({type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: doctor});
  };
  return (
    <div >
      <div className="cardContainer">
      <Link to={'/detail/' + doctor.id}>
        <img src= {imagenMedigo} alt="doctor" type="Image"/>
        <h4>name: {doctor.name}</h4>
        <h4>user:{doctor.username}</h4>
        <h4>id : {doctor.id}</h4>
        </Link>
      </div>
        <button onClick={toggleFav}> {findFav ? "*" : "-"}</button>
    </div>
  );
};

export default Card;
