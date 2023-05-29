import BankAccount from "../Components/BankAccount"
import Bills from "../Components/Bills"
import CreditCard from "../Components/CreditCard"
import MyFooter from "../Components/MyFooter"
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
            <MyFooter/>
        </div>
        

    )
}

export default BankAccountPage