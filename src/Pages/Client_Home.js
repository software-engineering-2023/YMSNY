import CardList from "../Components/CardList"
import Loan from "../Components/Loan"
import AccountsList from "../Components/AccountsList"
import LoansList from "../Components/LoansList"
import { useState } from "react"
import { FaBell } from "react-icons/fa";
import Navbar from "../Components/NavBar"

const accounts = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  }
]

const myCards = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  }
]



const Client_Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Navbar/>
      <AccountsList title={"My Bank Accounts"} cards={accounts} />
      <CardList title={"My Credit Cards"} cards={myCards} />
      <div>
        <Loan />
      </div>
      <LoansList title={"Current Loans"} />
      { !isOpen &&<button  style={{ position: "absolute", top: "10px", left: "10px"}} onClick={() =>setIsOpen(true)}> <FaBell/></button>}
      
      <div style={{ position: "fixed", top: "0", left: isOpen ? "0" : "-200px", width: "200px", height: "100%", backgroundColor: "#f2f2f2", transition: "all .3s ease-in-out" }}>
        <button style={{ position: "absolute", top: "500px", left: "100px" }} onClick={() => setIsOpen(!isOpen)}>Close</button>
        <h3 style={{ textAlign: "center" }}>Notifications</h3>
        <ul style={{ listStyleType: "none", paddingInlineStart: "0" }}>
          <li>Notification 1</li>
          <li>Notification 2</li>
          <li>Reminder 1</li>
          <li>Reminder 2  </li>
        </ul>
      </div>
    </div>

  )
}

export default Client_Home
