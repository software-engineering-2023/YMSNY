import CreditCard from "../Components/CreditCard"
import Transactions from "../Components/Transactions"
import { useState } from "react"

const card = {
    cardNumber : 2314234145879023,
    cardHolder: "Salma Zaki",
    cvv : "227",
    expirationDate: "31/5/2013",
    cardBalance: 40000,
    cardLimit: 70000
}
const CreditCardPage = () => {
    const [amount,setAmount] = useState(0)
    const handleClick = () =>{
        card.cardBalance = card.cardBalance + amount;
    }
    
    return (
        <div>
            <CreditCard props={card}/>
            <Transactions />
            <div style={{ fontSize: "20px", display: "flex", flexDirection: "row", justifyContent: "center", gap: "2rem" }}>
                <input onChange={e => setAmount(e.target.value)}/>
                <button onClick={handleClick}>Pay Now</button>
            </div>
        </div>


    )
}

export default CreditCardPage