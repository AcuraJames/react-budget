import React, { Component } from 'react';

import AddTransaction from './AddTransaction'
import TransactionList from './TransactionList'

import './App.css';

const dataSet = [
  {amount: 0, description: 'Description'},
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.data = dataSet
  }

  componentWillMount() {
    this.setState({data: dataSet})
  }
  
  add = (amount, description) => {
    dataSet.push({amount: amount, description: description})
    this.setState({data: dataSet})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Daily Cost</h1>
        </header>
        <main>
          <AddTransaction onAdd={this.add} />
          <TransactionList transactions={this.state.data} />
        </main>
      </div>
    )
  }
}

export default App;
