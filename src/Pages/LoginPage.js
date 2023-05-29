import Signin from '../Components/Signin';
import Register from '../Components/Register';
import NavBar from '../Components/NavBar';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import AdminPage from './AdminPage';
import Client_Home from './Client_Home';
import BankerPage from './BankerPage';

function LoginPage() {
    const navigate= useNavigate();
    const handleSubmit = (email) => {
        console.log(email)
        if(email=="youssef.khashaba@gmail.com"){
            navigate('/Client');
        }
        if(email=="salma.zaki@gmail.com"){
            navigate('/Admin');
        if(email=="youssef.ahmed@gmail.com"){
          navigate('/Banker');
      }
      
       
    }
        // handle sign in logic here
      };
    return (
      <div style={{ width: "100%" }}>
        <NavBar />
  
        <div
          style={{
            backgroundImage: `url("/Images/registerpic.jpeg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <Signin props={handleSubmit} />
            <Register />
          </div>
         
        </div>
        
      </div>
    );
  }
  
  export default LoginPage;