import { useContext, useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { EmployeeContext } from "../contexts/EmployeeContext";
import EditForm from "./EditForm";

const Employee = ({ employees }) => {

    // CREATE STATE
    const [editedId, setEditedId] = useState(null);

    // GET CONTEXT
    const { removeEmployee } = useContext(EmployeeContext);

    // GET ID FOR REMOVING
    const getIdForRemoving = (e, id) => {
        e.preventDefault();
        removeEmployee(id)
    }

    // GET ID FOR EDITING
    const getIdForEditing = (e, id) => {
        e.preventDefault();
        handleShow();
        setEditedId(id)
    }

    // CREATE STATE
    const [show, setShow] = useState(false);

    // SHOW MODAL AFTER CLICKING BUTTON [Add New Employee]
    const handleShow = () => setShow(true)

    // CLOSE MODAL AFTER CLICKING BUTTON [Close]
    const handleClose = () => setShow(false);

    // FOR CLOSING MODAL AFTER CHANGING CONTEXT
    useEffect(() => handleClose, [employees]);


    return (
        <>
            {
                employees.map((employee) => {
                    const { id, name, email, address, phone } = employee;

                    return (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{address}</td>
                            <td>{phone}</td>
                            <td>
                                <a onClick={e => getIdForEditing(e, id)}
                                    href="#"
                                    className="edit"
                                    data-toggle="modal">
                                    <i className="material-icons"
                                        data-toggle="tooltip"
                                        title="Edit">&#xE254;
                                    </i>
                                </a>

                                <a onClick={e => getIdForRemoving(e, id)}
                                    href="#"
                                    className="delete"
                                    data-toggle="modal">
                                    <i className="material-icons"
                                        data-toggle="tooltip"
                                        title="Delete">&#xE872;
                                    </i>
                                </a>
                            </td>
                        </tr>
                    )
                })
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm id={editedId} />
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

export default Employee;    