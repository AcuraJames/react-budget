import React, { useState } from 'react'
import './AddTransaction.css'

const AddTransaction = (props) => {

    const [amount, setAmount] = useState(0)
    const [description, setDescription] = useState('Description')

    return (
        <div className="add-transaction">
            <input 
                type="number"
                className="amount" 
                value={amount}
                onChange={event => setAmount(props.updateAmountData(event.target.value))}
            />
            <input 
                type="text" 
                className="decription"         
                value={description}
                onChange={event => setDescription(props.updateDescriptionData(event.target.value))}
            />
        </div>
    )
}

export default AddTransaction