import React from 'react'

const Transaction = props => {
    return (
       <div>
            <span>{props.trx.amount}</span>
                        &nbsp;
            <span>{props.trx.description}</span>
       </div>
    )
}

export default Transaction