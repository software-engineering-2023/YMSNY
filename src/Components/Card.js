import { Card,Button, CardImg } from "react-bootstrap"

const MyCard = () =>{
    return (
            <Card style={{ height: "350px", width: "15rem" }}>
                <Card.Body>
                <Card.Title className="mb-3" style={{ textDecoration: "underline"}}>Card: </Card.Title>
                <Card.Subtitle className="mb-4"> </Card.Subtitle>
                <Card.Subtitle className="mb-4">Card Number: </Card.Subtitle>
                <Card.Subtitle className="mb-4">Card Holder: </Card.Subtitle>
                <Card.Subtitle className="mb-4">Card Balance: </Card.Subtitle>
                <Card.Subtitle className="mb-4">Card Limit: </Card.Subtitle>
                <Card.Subtitle className="mb-4">Points : </Card.Subtitle>
                <Button variant="primary">View </Button>
                <Button variant="danger" style={{ marginLeft: "3rem" }}> Close</Button>
            </Card.Body>
            </Card>
      );
}

export default MyCard