import React from 'react';

const ListStock = ({ stocks, deleteStock }) => {

  return (
    <ul>
      {
        stocks &&
        stocks.length > 0 ?
            (
              stocks.map(stock => {
                return (
                  <li key={stock._id} onClick={() => deleteStock(stock._id)}>{stock.symbol}</li>
                )
              })
            )
            :
            (
              <li>No stock(s) left</li>
            )
      }
    </ul>
  )
}

export default ListStock