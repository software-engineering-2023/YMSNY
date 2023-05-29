import React from "react";
import { Table } from "react-bootstrap";
import "./Transactions.css";
import PayButton from "./PayButton"

const LoansList = ({title}) => {
  return (
    <div>
    <div 
        className="table-container">
        <caption className="table-title">{title}</caption>
        <Table responsive bordered hover size="sm" variant="light" className="my-table">
      <thead>
        <tr>
          <th>Date took</th>
          <th>Date of next Installment</th>
          <th>Installment</th>
          <th>Total Amount</th>
          <th> Pay </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>GUC</td>
          <td>2/1/2023</td>
          <td>123.OO EGP</td>
          <td>200000 EGP</td>
          <td><PayButton/></td>
        </tr>
        <tr>
          <td>Point 90</td>
          <td>6/3/2023</td>
          <td>1000.00 EGP</td>
          <td>700000 EGP</td>
          <td><PayButton/></td>
        </tr>
        <tr>
          <td>7 Mart</td>
          <td>15/4/2023</td>
          <td>3548.56 EGP</td>
          <td>5500000 EGP</td>
          <td><PayButton/></td>
        </tr>    
        </tbody>
    </Table>
    </div>
    </div>
  );
};

export default LoansList;