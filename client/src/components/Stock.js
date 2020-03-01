import React, {Component} from 'react';
import axios from 'axios';

import StockForm from './StockForm';
import TableStock from './TableStock';

class Stock extends Component {

  state = {
    stocks: []
  }

  componentDidMount(){
    this.getStocks();
  }

  getStocks = () => {
    axios.get('/api/stocks')
      .then(res => {
        if(res.data){
          this.setState({
            stocks: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteStock = (id) => {

    axios.delete(`/api/stocks/${id}`)
      .then(res => {
        if(res.data){
          this.getStocks()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { stocks } = this.state;

    return(
      <div>
        <h1>My Stock(s)</h1>
        <StockForm getStocks={this.getStocks}/>
        <hr></hr>
        <TableStock stocks={stocks} deleteStock={this.deleteStock}/>
      </div>
    )
  }
}

export default Stock;