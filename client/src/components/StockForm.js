import React, { Component } from 'react';
import axios from 'axios';
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"


class StockForm extends Component {

  state = {
    symbol: "",
    price: 0.00
  }

  addStock = () => {
    const task = {
        symbol: this.state.symbol,
        price: this.state.price
    }



    if(task.symbol && task.symbol.length > 0){
    
      axios.post('/api/stocks', task)
        .then(res => {
          if(res.data){
            this.props.getStocks();
            this.setState({symbol: ""})
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('input field required')
    }
  }

  handleChange = (e) => {
    this.setState({
      symbol: e.target.value
    })
  }

  handleSymbolChange = (e) => {
    this.setState({
      symbol: e.target.value
    })
  }

  handlePriceChange = (e) => {
    this.setState({
        price: e.target.value
      })
  }

  render() {
    let { symbol, price } = this.state;
    return (
      <div>
          <Form>
            <Form.Group controlId="formStockSymbol">
                <Form.Label>Symbol</Form.Label>
                <Form.Control type="text" placeholder="Enter Stock Symbol" onChange={this.handleSymbolChange} value={symbol}/>
            </Form.Group>
            <Form.Group controlId="formStockPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter Price" onChange={this.handlePriceChange} value={price}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.addStock}>
                Add Stock
            </Button>
          </Form>
      </div>
    )
  }
}

export default StockForm