import TechnicalIssues from "../Components/TechnicalIssues"
import AccountRequests from "../Components/AccountRequests"
import BankAnnouncements from "../Components/BankAnnouncements"
import Navbar from "../Components/NavBar";
const AdminPage =()=>{
    return(
        <div>
            <Navbar/>
            <TechnicalIssues/>
            <AccountRequests/>
            <BankAnnouncements/>
        </div>
    );
};
export default AdminPage;