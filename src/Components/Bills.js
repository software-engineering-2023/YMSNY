import React from "react";
import { Table } from "react-bootstrap";
import "./Transactions.css";
import PayButton from "./PayButton";
import '../App.css';

const Bills= () => {
  return (
    <div>
    <div 
        className="table-container">
        <caption className="table-title">Transactions</caption>
        <Table responsive bordered hover size="sm" variant="light" className="my-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Pay</th>
          <th>Set Reminder</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Transportation</td>
          <td>5/4/2023</td>
          <td>1500.OO EGP</td>
          <td><PayButton/></td>
          <td><input type="checkbox" class="l"></input></td>
        </tr>
        <tr>
          <td>Electricity</td>
          <td>1/4/2023</td>
          <td>1000.00 EGP</td>
          <td><PayButton/></td>
          <td><input type="checkbox" class="l"></input></td>
        </tr>
        <tr>
          <td>Cellphone</td>
          <td>15/4/2023</td>
          <td>750 EGP</td>
          <td><PayButton/></td>
          <td><input type="checkbox" class="l"></input></td>
        </tr>    
        </tbody>
    </Table>
    </div>
    <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
    <button > Add
  <span></span>
    </button>
    </div>
    </div>
  );
};

export default Bills;