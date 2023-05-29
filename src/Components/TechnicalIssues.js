import Card from 'react-bootstrap/Card';

function TechnicalIssues() {
  return (
    <div className = "d-flex justify-content-center align-items-center">
    <Card style={{ width: '18rem', color: "#000000", border: "1px solid #00000" }}>
      <Card.Body>
        <Card.Title className= "mb-3" style= {{ textDecoration: "underline"}}>Technical Issues</Card.Title>
        <Card.Subtitle className= "mb-4"> 1. I'm not receiving notifications.</Card.Subtitle>
        <Card.Subtitle className= "mb-4"> 2. Transactions are not complete. </Card.Subtitle>
        <Card.Subtitle className= "mb-4"> 3. My points are not redeemed correctly.</Card.Subtitle>
      </Card.Body>
    </Card>
    </div>
  );
}

export default TechnicalIssues;
