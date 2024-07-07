import React from 'react';

const CartWidget = () => {
  const itemCount = 5; // Número hardcodeado para demostración

  return (
    <div className="cart-widget">
      <i className="bi bi-cart"></i>
      <span className="badge bg-secondary">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
