import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Loan = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [type, setType] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('ID:', id);
    console.log('Loan Amount:', loanAmount);
    console.log('Bank Account:', bankAccount);
    console.log('Type:', type);
    console.log('Address:', address);
    setShowModal(false);
  };

  return (
    <div>
      <div className="loan" onClick={() => setShowModal(true)}>
        <p><b>Apply For A Loan</b></p>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Loan Application</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <label>
              Name:
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <br />
            <br />
            <label>
              ID:
              <input type="text" value={id} onChange={(event) => setId(event.target.value)} />
            </label>
            <br />
            <br />
            <label>
              Loan Amount:
              <input type="text" value={loanAmount} onChange={(event) => setLoanAmount(event.target.value)} />
            </label>
            <br />
            <br />
            <label>
              Bank Account:
              <input type="text" value={bankAccount} onChange={(event) => setBankAccount(event.target.value)} />
            </label>
            <br />
            <br />
            <label>
              Type:
              <select value={type} onChange={(event) => setType(event.target.value)}>
                <option value="">--Please choose an option--</option>
                <option value="car">Car</option>
                <option value="personal">Personal</option>
              </select>
            </label>
            <br />
            <br />
            <label>
              Address:
              <textarea value={address} onChange={(event) => setAddress(event.target.value)}></textarea>
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default Loan;
