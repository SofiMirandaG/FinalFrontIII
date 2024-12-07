import React from "react";

const Message = ({ nombre, email }) => {
  return (
    <>
      <h4>Gracias, {nombre}! </h4>
      <h4> te contactaremos cuando antes vía mail {email} </h4>
    </>
  );
};

export default Message;