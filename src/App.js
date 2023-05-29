import logo from './logo.svg';
import './App.css';
import ApplicationsList from './Components/ApplicationsList';
import BankerPage from './Pages/BankerPage';
import Bills from './Components/Bills';
import Client_Home from './Pages/Client_Home';
import BankAccountPage from './Pages/BankAccountPage';
import TheftList from './Components/TheftList';
import CreditCardPage from './Pages/CreditCardPage';

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
function App() {
  return (
    <div>
      <BankAccountPage/>
      <Client_Home/>
      <CreditCardPage />
      <BankerPage/>
    
    </div>
  );
}

export default App;
