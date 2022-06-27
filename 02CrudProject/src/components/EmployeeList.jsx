import { useContext, useState } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { Modal, Button } from 'react-bootstrap';
import Employee from './Employee';
import AddForm from './AddForm';

const EmployeeList = () => {

    const { employees } = useContext(EmployeeContext);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show)

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

            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleShow}>
                <Modal.Header >
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleShow}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EmployeeList;