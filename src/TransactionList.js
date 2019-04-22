import React from 'react'

const TransactionList = (props) => {
    return (
        <div className="transaction-list">
            <h2>Transations</h2>
            <span className="amount"> {props.amount} </span>
            <span className="description"> {props.description} </span>
        </div>
    )
}

export default TransactionList