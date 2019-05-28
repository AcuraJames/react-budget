import React from 'react'
import './AddTransaction.css'

class AddTransaction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 10,
            description: 'description'
        }
    }

    handleChangeAmount = (e) => {
        this.setState({amount: e.target.value})
    }

    handleChangeDescription = (e) => {
        this.setState({description: e.target.value})
    }

    add = () => {
        this.props.onAdd(this.state.amount, this.state.description)
    }

    render() {
        return (
            <div className="add-transaction">
                <input 
                    type="number"
                    className="amount" 
                    value={this.state.amount}
                    onChange={this.handleChangeAmount}
                />
                <input 
                    type="text" 
                    className="decription"         
                    value={this.state.description}
                    onChange={this.handleChangeDescription}
                />
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default AddTransaction