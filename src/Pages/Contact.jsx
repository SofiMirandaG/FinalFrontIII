import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Message from "../Components/Message";


const Contact = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });

  console.log(user);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    debugger;
    if (
      user.nombre.trim().length >= 3 &&
      regexEmail.test(user.email)
    ) {
      setShow(true);
      setError(false);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      setError(true);
    }
  };
  return (
    <div>
      {show ? ( 
        <Message nombre={user.nombre} email={user.email} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            value={user.nombre}
            name="nombre"
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="text"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
          <button>Enviar</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              Por favor verifique su información nuevamente
            </h4>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Contact