import BankAccount from "../Components/BankAccount"
import Bills from "../Components/Bills"
import CreditCard from "../Components/CreditCard"
import Navbar from "../Components/NavBar"
import Transactions from "../Components/Transactions"
import Transfer from "../Components/Transfer"


const BankAccountPage = () =>{
    return (
        <div>
            <Navbar/>
            <BankAccount/>
            <Transactions/>
            <Bills/>
            <Transfer/>
        </div>
        

    )
}

export default BankAccountPage