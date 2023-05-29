import ApplicationsList from "../Components/ApplicationsList"
import CreditCardApp from "../Components/CreditCardApp";
import LoanApp from "../Components/LoanApp";
import Navbar from "../Components/NavBar";
import TheftList from "../Components/TheftList";

const BankerPage = () => {
    return (
        <div>
            <Navbar />
            <div style={{ margin: "auto" }}>
                <h1 style={{ textAlign: "center" }}> <b>Credit Card Applications </b> </h1>
                <br />
                <CreditCardApp />
                <h1 style={{ textAlign: "center" }}> <b> Loan Applications </b></h1>
                <br />
                <LoanApp />
                <h1 style={{ textAlign: "center" }}> <b> Reports </b></h1>
                <br />
                <ApplicationsList />
                <br />
                <TheftList />
                <h1 style={{ textAlign: "center" }}> Send announcment : </h1>
                <textarea className="textArea"></textarea>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" ,gap : "0.5rem" , paddingTop : "2rem"}}>
                                <button > Send
                                    <span></span>
                                </button>
                                </div>


            </div>
        </div>


    )
}

export default BankerPage;