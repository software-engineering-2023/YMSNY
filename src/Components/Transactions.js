import React from "react";
import { Table } from "react-bootstrap";
import "./Transactions.css";

const Transactions = () => {
  return (
    <div>
    <div 
        className="table-container">
        <caption className="table-title">Transactions</caption>
        <Table responsive bordered hover size="sm" variant="light" className="my-table">
      <thead>
        <tr>
          <th>Place</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>GUC</td>
          <td>2/1/2023</td>
          <td>123.OO EGP</td>
        </tr>
        <tr>
          <td>Point 90</td>
          <td>6/3/2023</td>
          <td>1000.00 EGP</td>
        </tr>
        <tr>
          <td>7 Mart</td>
          <td>15/4/2023</td>
          <td>3548.56 EGP</td>
        </tr>    
        </tbody>
    </Table>
    </div>
    <div style={{fontSize: "20px", display: "flex", flexDirection: "row", justifyContent: "center", gap: "2rem"}}>
        <p>Payment: 20,000 </p> 
        <button>Pay Now</button>
    </div>
    </div>
  );
};

export default Transactions;