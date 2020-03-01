import React from 'react';

const ListItemStock = ({ stock, deleteStock }) => {

  return (
    <li key={stock._id} onClick={() => deleteStock(stock._id)}>{stock.symbol}</li>
  )
}

export default ListItemStock