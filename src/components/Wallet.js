import React, {useState} from 'react'

const Wallet = () => {
    const [total, setTotal] = useState(0);
    const [inputNumber, setInputNumber] = useState(0);

    const deposit = () => {
        setTotal(total + Number(inputNumber))
    }

    const withdraw = () => {
        setTotal(total - Number(inputNumber))
    }

    return(
        <>    
        <p>Total: £{total}</p>
        <input type="number" onChange={event => {setInputNumber(event.target.value)}}/>
        <button onClick={() => deposit()}>Deposit</button>
        <button onClick={() => withdraw()}>Withdraw</button>
        </>
    );
}

export default Wallet
