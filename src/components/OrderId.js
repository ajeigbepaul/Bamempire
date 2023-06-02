import React from 'react'

function OrderId({order}) {
  return <h2 className="order__h">ORDER-ID : {order?.orderNumber} </h2>;
}

export default OrderId