
import { Table } from "react-bootstrap";

const TheftList = () => {
    return (
        <div>
            <div
                className="table-container">
                <caption className="table-title">Credit Card Thefts Reports</caption>
                <Table responsive bordered hover size="sm" variant="light" className="my-table">
                    <thead>
                        <tr>
                            <th>Client ID</th>
                            <th>Credit Card Number</th>
                            <th>Descrpition</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GUC</td>
                            <td>2/1/2023</td>
                            <td>123.OO EGP</td>
                            <td> <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                <button > View Card
                                    <span></span>
                                </button>
                            </div></td>
                        </tr>
                        <tr>
                            <td>Point 90</td>
                            <td>6/3/2023</td>
                            <td>1000.00 EGP</td>
                            <td> <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                <button > View Card
                                    <span></span>
                                </button>
                            </div></td>
                        </tr>
                        <tr>
                            <td>7 Mart</td>
                            <td>15/4/2023</td>
                            <td>3548.56 EGP</td>
                            <td> <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                <button > View Card
                                    <span></span>
                                </button>
                            </div></td>
                        </tr>
                    </tbody>
                </Table>
            </div >
        </div >
    );
}

export default TheftList