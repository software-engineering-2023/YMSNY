import TechnicalIssues from "../Components/TechnicalIssues"
import AccountRequests from "../Components/AccountRequests"
import BankAnnouncements from "../Components/BankAnnouncements"
const AdminPage =()=>{
    return(
        <div>
            <TechnicalIssues/>
            <AccountRequests/>
            <BankAnnouncements/>
        </div>
    );
};
export default AdminPage;