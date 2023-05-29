import React from 'react';
import {Table, Button} from 'react-bootstrap';


const AccountRequests = () =>{
  return (
    <div className = "table-container">
    <caption className= "table-title">  Account Requests</caption>
    <Table responsive bordered hover size= "sm" variant= "light" className= "my-table">
      <thead>
        <tr>
          <th>User</th>
          <th>Request Type</th>
          <th>Accept/Reject</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Morouge Ashraf</td>
          <td>Request to Initialize Account</td>
          <td><Button>Accept</Button>{' '}
              <Button>Reject</Button></td>
        </tr>
        <tr>
          <td>Salma Zaki</td>
          <td>Request to Change Password</td>
          <td><Button>Accept</Button>{' '}
              <Button>Reject</Button></td>
        </tr>
        <tr>
          <td>Nour Mohamed</td>
          <td>Request to Change Password</td>
          <td><Button>Accept</Button>{' '}
              <Button>Reject</Button></td>
        </tr>
        <tr>
          <td>Youssef Khashaba</td>
          <td>Request to Initialize Account</td>
          <td><Button>Accept</Button>{' '}
              <Button>Reject</Button></td>
        </tr>
        <tr>
          <td>Youssef Ahmed</td>
          <td>Request to Change Password</td>
          <td><Button>Accept</Button>{' '}
              <Button>Reject</Button></td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default AccountRequests;