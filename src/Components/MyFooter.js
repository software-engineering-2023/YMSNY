import { Modal,Button } from "react-bootstrap"
import { useState } from "react";
const MyFooter = () =>{
    const [showModal, setShowModal] = useState(false);
    const show = () => {
        setShowModal(true)
    }
    return(
        <div>
             <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Oops what happens to be the problem? <br/> Let Us Help You</Modal.Title>
                </Modal.Header>
                <form >
                    <Modal.Body>
                        <label>
                            Name:
                            <input type="text" />
                        </label>
                        <br />
                        <br />
                        <label>
                            ID:
                            <input type="text" />
                        </label>
                        <br />
                        <br />
                        <label>
                            Description:
                            <input type="text" />
                        </label>
                        <br />
                        <br />
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
            <hr/>
            <button onClick={show} className="problem"> Report a Problem</button>
        </div>
        
        
    )
}

export default MyFooter