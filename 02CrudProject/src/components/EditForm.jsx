import { useContext, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';

const EditForm = (props) => {

    // GET CONTEXT
    const { employees, editEmployee } = useContext(EmployeeContext);

    // CREATE STATE
    const [dataForm, setDataForm] = useState({ name: '', email: '', address: '', phone: '' });

    // INPUT CHANGE FOR SETTING STATE
    const inputChange = e => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    }

    // DESTRUCTURING FOR SETTING VALUE
    const { name, email, address, phone } = dataForm;

    // DESTRUCTURING FOR SETTING STATE
    const { id } = props;

    // SEND DATA TO CONTEXT
    const sendData = e => {
        e.preventDefault();
        editEmployee(id, dataForm);
    }

    // SET STATE FOR GETTING CURRENTLY EMPLOYEE
    useEffect(() => {
        setDataForm(...employees.filter(employee => employee.id == id));

    }, [])



    return (
        <Form onSubmit={(e) => sendData(e)}>
            <Form.Group className='mb-4'>
                <Form.Control
                    onChange={(e) => inputChange(e)}
                    name="name"
                    value={name}
                    type="text"
                    placeholder="Name *"
                    required
                />
            </Form.Group>

            <Form.Group className='mb-4'>
                <Form.Control
                    onChange={(e) => inputChange(e)}
                    name="email"
                    value={email}
                    type="email"
                    placeholder="Email *"
                    required
                />
            </Form.Group>

            <Form.Group className='mb-4'>
                <Form.Control
                    onChange={(e) => inputChange(e)}
                    name="address"
                    value={address}
                    as="textarea"
                    placeholder="Adress"
                    rows={3}
                />
            </Form.Group>

            <Form.Group className='mb-4'>
                <Form.Control
                    onChange={(e) => inputChange(e)}
                    name="phone"
                    value={phone}
                    placeholder="Phone"
                    rows={3}
                />
            </Form.Group>

            <Button
                variant="danger"
                type="submit"
                style={{ width: "100%" }}
            >
                Edit Employee
            </Button>
        </Form>
    )
}

export default EditForm;