import React, { Component } from 'react';
import axios from 'axios';


class Input extends Component {

  state = {
    action: ""
  }

  addStock = () => {
    const task = {symbol: this.state.symbol}

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

  render() {
    let { symbol } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={symbol} />
        <button onClick={this.addStock}>add stock</button>
      </div>
    )
  }
}

export default Input