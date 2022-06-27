import { useContext, useEffect, useState } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { Modal, Button } from 'react-bootstrap';
import Employee from './Employee';
import AddForm from './AddForm';

const EmployeeList = () => {

    // GET CONTEXT
    const { employees } = useContext(EmployeeContext);

    // CREATE STATE
    const [show, setShow] = useState(false);

    // SHOW MODAL AFTER CLICKING BUTTON [Add New Employee]
    const handleShow = () => setShow(true)

    // CLOSE MODAL AFTER CLICKING BUTTON [Close]
    const handleClose = () => setShow(false);

    // FOR CLOSING MODAL AFTER CHANGING CONTEXT
    useEffect(() => handleClose,[employees]);

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button
                            onClick={handleShow}
                            className="btn btn-success text-white"
                            data-toggle="modal">
                            <i className="material-icons">&#xE147;</i>
                            <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <Employee employees={employees} />
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EmployeeList;