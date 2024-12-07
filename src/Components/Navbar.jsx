import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Router/routes'
import "../styles/Navbar.css";
import {useDoctorState} from "../Context/global.context";

const Navbar = () => {
  const {dispatch, state} = useDoctorState();
  state.isLightTheme = true;;
  

  return (
    <nav className="navbar">
      <Link to={routes.home}>
      <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
      <h4>Contact</h4>
      </Link>
      <Link to={routes.favs}>
      <h4>Favs</h4>
      </Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => dispatch({ type: "THEME" })}>
      {state.isLightTheme ? true : false}Change theme</button>
    </nav>
  )
}

export default Navbar