import BankAccount from "../Components/BankAccount"
import Bills from "../Components/Bills"
import CreditCard from "../Components/CreditCard"
import Transactions from "../Components/Transactions"


const BankAccountPage = () =>{
    return (
        <div>
            <BankAccount/>
            <Transactions/>
            <Bills/>
        </div>
        

    )
}

export default BankAccountPage