import React from 'react'
import Transaction from './Transaction'

const TransactionList = props => {

    const style = {
        width: '1000px',
        height: '100px'
    }

    const trxList = props.transactions.map((trx, idx) => (
        <li key={idx}><Transaction style={style} trx={trx} /></li>
    ))

    return (
        <div className="transaction-list">
            <h2>Transations</h2>
            <ul>
                {trxList}
            </ul>
        </div>
    )
}

export default TransactionList