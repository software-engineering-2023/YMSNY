import Card from 'react-bootstrap/Card';


const BankAccount = (props) => {
    return (
        <div className="d-flex justify-content-center align-items-center">
        <Card style={{ width: '18rem' , color: "#000000", border: "1px solid #000000"}}>
            <Card.Body>
            <Card.Title className="mb-3" style={{ textDecoration: "underline"}}>Bank Account: {props.card}</Card.Title>
            <Card.Subtitle className="mb-4"> </Card.Subtitle>
            <Card.Subtitle className="mb-4">Bank Account Number: {props.num}</Card.Subtitle>
            <Card.Subtitle className="mb-4">PIN: {props.cvv}</Card.Subtitle>
            <Card.Subtitle className="mb-4">Bank Account Holder: {props.name}</Card.Subtitle>
            <Card.Subtitle className="mb-4">Type: {props.type}</Card.Subtitle>
            <Card.Subtitle className="mb-4">Bank Account Balance: {props.balance}</Card.Subtitle>
        </Card.Body>
        </Card>
    </div>
    )
}

export default BankAccount