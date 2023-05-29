import { useState } from "react"
import { Card, Button, Modal } from "react-bootstrap"


const AddCard = () => {
    const [visible, setVisible] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [loanAmount, setLoanAmount] = useState('');
    const [bankAccount, setBankAccount] = useState('');
    const [type, setType] = useState('');
    const [address, setAddress] = useState('');
    const handleClick = () => {
        setVisible(false)
    }

    const show = () => {
        setShowModal(true)
    }
    return (
        <>
            <Card style={{ width: "15rem" }}>
                <Card.Img src="/plus.png" onClick={show} ></Card.Img>
                <Button variant="primary">View </Button>
            </Card>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>New Credit Card Application</Modal.Title>
                </Modal.Header>
                <form >
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
                            Balance:
                            <input type="number" value={loanAmount} onChange={(event) => setLoanAmount(event.target.value)} />
                        </label>
                        <br />
                        <br />
                        <label>
                            Limit:
                            <input type="number" value={bankAccount} onChange={(event) => setBankAccount(event.target.value)} />
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
        </>



    )

}

export default AddCard