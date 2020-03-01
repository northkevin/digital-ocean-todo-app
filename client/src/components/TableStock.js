

import React from 'react';
import Table from 'react-bootstrap/Table';

const TableStock = ({ stocks, deleteStock }) => {

  return (
    <Table striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Updated At</th>
            <th>_id</th>
            </tr>
        </thead>
        <tbody>
            {
            stocks &&
            stocks.length > 0 ?
                (
                stocks.map(stock => {
                    return (
                        <tr key={stock._id} onClick={() => deleteStock(stock._id)}>
                        <td>{stock.symbol}</td>
                        <td>{stock.price}</td>
                        <td>{stock.updated_at}</td>
                        <td>{stock._id}</td>
                        </tr>
                    )
                })
                )
                :
                (
                <tr><td>No stock(s) left</td></tr>
                )
            }
        </tbody>
    </Table>
  )
}

export default TableStock