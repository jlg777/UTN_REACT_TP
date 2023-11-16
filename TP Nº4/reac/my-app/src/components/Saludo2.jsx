import React, { useState } from "react";

export const Saludo2 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      {isOpen ? " " : "Saludo Dinamico"}
      <div>
        <button onClick={() => setOpen(!isOpen)}>click para recibir saludo!</button>
      </div>
    </div>
  );
};
