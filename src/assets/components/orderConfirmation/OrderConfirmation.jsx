import React from 'react'

const OrderConfirmation = ({isId}) => {
  return (
    <div>
      {isId !== "" && (
        <h3> Tu orden de compra se generó con el id: {isId}</h3>
      )}
    </div>
  );
}

export default OrderConfirmation;