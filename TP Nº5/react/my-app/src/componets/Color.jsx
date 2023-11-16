import React, { useState } from "react";

function Color() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div style={{ backgroundColor: active ? "red" : "white" }}>
        <button onClick={handleClick}>click para cambiar color!</button>
        <h1>Bienvenidos!</h1>
      </div>
    </div>
  );
}

export default Color;