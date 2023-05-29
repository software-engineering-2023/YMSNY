import React from "react";
import { Table } from "react-bootstrap";
import "./Transactions.css";

const LoanApp = () => {
  return (
    <div>
    <div 
        className="table-container">
        <caption className="table-title">Transactions</caption>
        <Table responsive bordered hover size="sm" variant="light" className="my-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Years</th>
          <th> Status </th>
          <th> Handle </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2278</td>
          <td>Khashaba Fetar</td>
          <td>123OO EGP</td>
          <td>5</td>
          <td> Unhandled</td>
          <td> <div style={{ display: "flex", justifyContent: "center", width: "100%" ,gap : "0.5rem"}}>
                                <button > Accept
                                    <span></span>
                                </button>
                                <button > Reject
                                    <span></span>
                                </button>
                            </div></td>
        </tr>
        <tr>
          <td>90</td>
          <td>Salma Zaki</td>
          <td>100000 EGP</td>
          <td>8</td>
          <td> Unhandled</td>
          <td> <div style={{ display: "flex", justifyContent: "center", width: "100%" ,gap : "0.5rem"}}>
                                <button > Accept
                                    <span></span>
                                </button>
                                <button > Reject
                                    <span></span>
                                </button>
                            </div>
                            </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Nour Swift</td>
          <td>35000 EGP</td>
          <td>2</td>
          <td> Unhandled</td>
          <td> <div style={{ display: "flex", justifyContent: "center", width: "100%" ,gap : "0.5rem"}}>
                                <button > Accept
                                    <span></span>
                                </button>
                                <button > Reject
                                    <span></span>
                                </button>
                            </div></td>
        </tr>    
        </tbody>
    </Table>
    </div>
    </div>
  );
};

export default LoanApp;