import Card from 'react-bootstrap/Card';

function CreditCard({props}) {
  return (
    <div className="d-flex justify-content-center align-items-center">
        <Card style={{ width: '18rem' , color: "#000000", border: "1px solid #000000"}}>
            <Card.Body>
            <Card.Title className="mb-3" style={{ textDecoration: "underline"}}>Card: {props.card}</Card.Title>
            <Card.Subtitle className="mb-4"> </Card.Subtitle>
            <Card.Subtitle className="mb-4">Card Number: {props.cardNumber}</Card.Subtitle>
            <Card.Subtitle className="mb-4">CVV: {props.cvv}</Card.Subtitle>
            <Card.Subtitle className="mb-4">Card Holder: {props.cardHolder}</Card.Subtitle>
            <Card.Subtitle className="mb-4">Expiration Date: {props.expirationDate}</Card.Subtitle>
            <Card.Subtitle className="mb-4">Card Balance: {props.cardBalance}</Card.Subtitle>
            <Card.Subtitle className="mb-4">Card Limit: {props.cardLimit}</Card.Subtitle>
        
        </Card.Body>
        </Card>
    </div>
  );
}
const creditcard={card: 1,
    cardNumber : 2314234145879023,
    cardHolder: "Salma Zaki",
    cvv : "227",
    expirationDate: "31/5/2013",
    cardBalance: 40000,
    cardLimit: 70000
}

export default CreditCard;