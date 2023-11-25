import React, { useState } from 'react';

const ProductDetail = () => {
  const [isPurchased, setIsPurchased] = useState(false);

  const handleBuyClick = () => {
    setIsPurchased(true);
  };

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <p>Nombre: Producto "X"</p>
      <p>Descripción: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores ab dicta, placeat cupiditate quis quasi, officiis molestiae iusto accusantium sit reprehenderit debitis ipsam dolor eligendi? A deserunt tempore necessitatibus aperiam.</p>
      <p>Precio: $XX,xx</p>
      <p>SKU: ABC123</p>
      <p>Cantidad disponible: 50</p>

      {isPurchased && <p>Gracias por su compra</p>}

      <button onClick={handleBuyClick} disabled={isPurchased}>
        Comprar
      </button>
    </div>
  );
};

export default ProductDetail;