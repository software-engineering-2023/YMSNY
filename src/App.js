import logo from './logo.svg';
import './App.css';
import ApplicationsList from './Components/ApplicationsList';
import BankerPage from './Pages/BankerPage';
import Bills from './Components/Bills';
import Client_Home from './Pages/Client_Home';
import BankAccountPage from './Pages/BankAccountPage';
import TheftList from './Components/TheftList';
import CreditCardPage from './Pages/CreditCardPage';
import Signin from './Components/Signin';
import Register from './Components/Register';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import AdminPage from './Pages/AdminPage';
import LoginPage from './Pages/LoginPage';
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
      <LoginPage/>
      <Routes>
        <Route path='Client' element = {<Client_Home/>}/>
        <Route path='Banker' element = {<BankerPage/>}/>
        <Route path='Admin' element = {<AdminPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
