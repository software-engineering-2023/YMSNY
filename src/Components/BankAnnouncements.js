import Card from 'react-bootstrap/Card';

function BankAnnouncements() {
  return (
    <div className = "d-flex justify-content-center align-items-center">
    <Card style={{ width: '18rem', color: "#000000", border: "1px solid #00000" }}>
      <Card.Body>
        <Card.Title className= "mb-3" style= {{ textDecoration: "underline"}}>Bank Announcements</Card.Title>
        <Card.Subtitle className= "mb-4"> 1. New type of account savings</Card.Subtitle>
        <Card.Subtitle className= "mb-4"> 2. New interest on loans </Card.Subtitle>
        <Card.Subtitle className= "mb-4"> 3. OFFERS! New credit and debits cards available.</Card.Subtitle>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BankAnnouncements;