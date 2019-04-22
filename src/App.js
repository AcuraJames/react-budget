import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddTransaction from './AddTransaction'
import TransactionList from './TransactionList'

class App extends Component {
  state = {
    amount: 0,
    description: 'Description'
  }

  updateAmountData = (value) => {
    this.setState({amount: value})
  }

  updateDescriptionData = (value) => {
    this.setState({description: value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <AddTransaction 
            updateAmountData={this.updateAmountData}
            updateDescriptionData={this.updateDescriptionData}
          />
          <TransactionList 
            amount={this.state.amount}
            description={this.state.description}
          />
        </main>
      </div>
    )
  }
}

export default App;
