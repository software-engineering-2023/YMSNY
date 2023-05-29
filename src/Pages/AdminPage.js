import TechnicalIssues from "../Components/TechnicalIssues"
import AccountRequests from "../Components/AccountRequests"
import BankAnnouncements from "../Components/BankAnnouncements"
import Navbar from "../Components/NavBar";
import MyFooter from "../Components/MyFooter";
const AdminPage =()=>{
    return(
        <div>
            <Navbar/>
            <TechnicalIssues/>
            <AccountRequests/>
            <BankAnnouncements/>
            <MyFooter/>
        </div>
    );
};
export default AdminPage;