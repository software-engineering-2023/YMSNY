import CreditCard from "../Components/CreditCard"
import Transactions from "../Components/Transactions"
import { useState } from "react"
import Navbar from "../Components/NavBar";
const mycard = {
    cardNumber: 2314234145879023,
    cardHolder: "Salma Zaki",
    cvv: "227",
    expirationDate: "31/5/2013",
    cardBalance: 40000,
    cardLimit: 70000,
    points: 1000
}
const CreditCardPage = () => {
    const [amount, setAmount] = useState(0)
    const [points, setPoints] = useState(0)
    const [card, setCard] = useState(mycard);
    const handleClick = () => {
        const newCard = { ...card };
        newCard.cardBalance = card.cardBalance + Number(amount);
        setCard(newCard);
    }

    const handleClickPoints = () => {
        const newCard = { ...card };
        if (card.points > 0) {
            newCard.points = card.points - Number(points);
            newCard.cardBalance = card.cardBalance + Number(points);
            setCard(newCard);
        }

    }

    return (
        <div>
            <Navbar />
            <CreditCard props={card} />
            <Transactions />
            <div style={{ fontSize: "20px", textAlign: "center" }}>
                <h1> Pay Credit Card Balance</h1>
                <br />

                <div style={{ display: "flex", justifyContent: "center", width: "100%", gap: "0.5rem" }}>
                    <input onChange={e => setAmount(e.target.value)} />
                    <button onClick={handleClick}> Pay
                        <span></span>
                    </button>
                </div>
                <br/>
                <h1> Redeem Points For CashBack</h1>
                <h4> 1 Point = 1 EGP !!!! </h4>
                <br />
                <div style={{ display: "flex", justifyContent: "center", width: "100%", gap: "0.5rem" }}>
                    <input onChange={e => setPoints(e.target.value)} />
                    <button onClick={handleClickPoints}> Pay
                        <span></span>
                    </button>
                </div>
            </div>

            <button className="stolen"> Report Stolen</button>
        </div>


    )
}

export default CreditCardPage