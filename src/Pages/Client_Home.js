import CardList from "../Components/CardList"
import Loan from "../Components/Loan"
import AccountsList from "../Components/AccountsList"
import LoansList from "../Components/LoansList"

const accounts = [
    {
      id : 1
    },
    {
      id : 2
    },
    {
      id : 3
    },
    {
      id : 4
    }
]

const myCards = [
    {
        id : 1
      },
      {
        id : 2
      },
      {
        id : 3
      },
      {
        id : 4
      }
]
const Client_Home = () =>{
    return(
        <div>
            <AccountsList title={"My Bank Accounts"} cards={accounts} />
            <CardList title={"My Credit Cards"} cards={myCards}/>
            <div>
                <Loan/>
            </div>
            <LoansList title = {"Current Loans"}/>
        </div>
        
    )
}

export default Client_Home