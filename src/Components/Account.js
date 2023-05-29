import { Card, Button } from "react-bootstrap"


const Account = (props) => {
    return (
        <Card style={{ height: "350px", width: "15rem" }}>
            <Card.Body>
                <Card.Title>Bank Account</Card.Title>
                <Card.Title className="mb-3" style={{ textDecoration: "underline" }}>Card: {props.card}</Card.Title>
                <Card.Subtitle className="mb-4"> </Card.Subtitle>
                <Card.Subtitle className="mb-4">Bank Account Number: {props.num}</Card.Subtitle>
                <Card.Subtitle className="mb-4">Bank Account Holder: {props.name}</Card.Subtitle>
                <Card.Subtitle className="mb-4">Type: {props.type}</Card.Subtitle>
                <Card.Subtitle className="mb-4">Bank Account Balance: {props.balance}</Card.Subtitle>
                <Button variant="primary">View </Button>
                <Button variant="danger" style={{ marginLeft: "3rem" }}> Close</Button>
            </Card.Body>
        </Card>
    )

}

export default Account